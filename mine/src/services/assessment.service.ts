import exp from "constants";
import Db, { carts, product, results } from "../database/db";
import Assessment from "../entities/assessment.entity";
import Question from "../entities/question.entity";
import Result from "../entities/result.entity";
import Cart from "../entities/cart.entity";
import CartDetails from "../entities/cartdetails.entity";


// Welcome
// I have created a products entity similar to the one you created in my database/db.ts
// Go check it out
export function addinToCart(transactionDetails: {productId: number, quantity: number, userId: number, cartId:number}){
// Firstly, we'll need to search the product requested for by its id, in our database, before we can do anything
const searchProductinDB = product.find(p=> p.id === transactionDetails.productId)

// If we dont have the product requested for, tell them
if (!searchProductinDB) {
    throw new Error("Requested Product not in Store");
}
// But if we do have the requested product, then...................... 
// check if the quantity requested for(i.e quantity) doesnt exceed, what we got in stock(searchProductinDB.quantity)
if(transactionDetails.quantity > searchProductinDB.quantity){
    throw new Error("Requested quantity has exceeded limit in stock")
}

// calculate the price of the quantities bought(i.e price multiplied by qty)=== we'll use this later
const totalAmountOfGoods = searchProductinDB.price * transactionDetails.quantity;

//Reduce the overall quantities of the said goods in our stock
searchProductinDB.quantity = searchProductinDB.quantity - transactionDetails.quantity 
// this could also be short-handed thus: searchProductinDB.quantity -= transactionDetails.quantity

// ============================Now we add to cart============================================ 
// Firstly, we initialize an empty variable of type; cart
// Think of a NEWCOMMER ==> he'll definitly not have a cartId at first request
let cart: Cart;
if(transactionDetails.cartId){
    // This line ensures this particular cart owner is always called when 
    cart = carts.find(c=> c.id === transactionDetails.cartId && c.userId === transactionDetails.userId);
    if(cart === undefined){
        throw new Error("You are a newCommer, make a purchase, select a cartId")
    }
}

    else{
        cart = new Cart();
    cart.id = carts.length + 1;
    cart.userId = transactionDetails.userId;
    cart.totalAMount = 0;
    cart.cartDetails = []

    }

const cartDetails = new CartDetails()
cartDetails.amount = totalAmountOfGoods;
cartDetails.quantity = transactionDetails.quantity;
cartDetails.productId = transactionDetails.productId;
cartDetails.cartId = cart.id;


cart.totalAMount += totalAmountOfGoods;

// Remember the BAG we created in Carts entity? We are storing our purchased goods in there
cart.cartDetails.push(cartDetails)

// As a newcommer who doesnt have a cartId yet, his first request would not be thrown away. We wanna store it!!!
if(!transactionDetails.cartId){
    carts.push(cart)
}
// return to us every thing about this buyer
return cart






}























export function getAssessment(option: {categoryId?: number; }):Assessment | undefined{
    const { categoryId} = option;

    if (!categoryId) {
        return undefined
    }
    let assessment: Assessment | undefined;
    switch (true) {
        case categoryId !== undefined:
            assessment = Db.assessments.find(assess=> assess.categoryId === categoryId);
            break;

        // case assessmentId !== undefined:
        //     assessment = Db.assessments.find(assess=> assessmentId === assessmentId);
        //     break;

        default:
            break;
    }
    return assessment

}




export function getQuestions(assessId: number): Question[] | string {

    const passesAssessmentId = assessId;
    
    if (!passesAssessmentId) {
        return "Pass in a valid Id"
    }
    
    return Db.questions.filter((quest)=> quest.assessmentId === assessId)
}


export function incrementScore(assessmentId:number, response: 
    {userId: number; questionId: number; answer: number}) 
    {
    const questInDb = Db.questions.find(quest=> quest.id === response.questionId)
    // let score = 0;    
    // while(questInDb){
    //         if(response.answer === questInDb.correctOption){
    //         const resDetails = {assessmentId: assessmentId, userId: response.userId, score: score}
    //         score++
    //         printResult(resDetails)
    //         }
    //     }
    if (questInDb) {
    let scores = 0;
        if(response.answer === questInDb.correctOption){
            scores++;
            const resDetails = {assessmentId: assessmentId, userId: response.userId, score: scores}
            return printResult(resDetails) 
        } 
        return "Incorrect, Your score remains " + scores
    }
    // const resDetails = response.userId && assessmentId && score
    
}

export function printResult(details: {assessmentId:number,userId: number, score: number}){
    // let totalScore = details.score;
    const newResult = new Result()

    newResult.id = Db.results.length,
    newResult.assessmentId = details.assessmentId,
    newResult.userId = details.userId,
    newResult.score = details.score,
    newResult.dateTaken = new Date()

     Db.results.push(newResult);
     return results


    // const newResult = {
    //     id: Db.results.length,
    //     userId: details.userId,
    //     assessmentId: details.assessmentId,
    //     score: details.score,
    //     dateTaken: new Date(),
    // }

    // Db.results.push(newResult)
    // return results


    // export function addToCart(){
        
        // incomingReq.productId

    // }
    // install ts-node and ts-node-dev
}



// export function calculateScore(assessmentId: number, response: {userId: number;
//      questionId: number; answer: number}):number {
//     const userCurrentResult = getorCreateResult(response.userId, assessmentId);
//     let score = 0
//     const refQuestion = Db.questions.find((quest)=> quest.assessmentId === 
//         assessmentId && response.questionId === quest.id);
    
//     if (refQuestion) {
//         if (refQuestion.correctOption===response.answer) {
//             score = 1;
//         }
//     }
//     userCurrentResult.score += score
//     return score
// }

// function getorCreateResult(userId: number, assessId:number) {
//     const results = Db.results.find(result=> result.userId === userId && result.assessmentId === assessId)
    
//     if(results){
//         return results
//     }
    
//     const newResult = {
//         id: Db.results.length + 1,
//         userId: userId,
//         assessmentId: assessId,
//         score: 0,
//         dateTaken : new Date()
//     }

//     Db.results.push(newResult);
//     return newResult;
// }