import { Request, Response } from "express";
import {  addinToCart, getAssessment, getQuestions, incrementScore } from "../services/assessment.service";
import Db, { categories } from "../database/db";
import Category from "../entities/category.entity";
// import { assessments } from "../database/db";


// Your solution starts from Here

export function addToCart(req: Request, res: Response){
    // req.body === Here's are what gets passed in by the user from the request body on the browser
    // Then we destructure{id, quantity} === similar to when you offload and separate the contents in a luggage
    const transactionDetails = req.body as { productId:number, quantity:number, userId:number, cartId:number }

    // We transfer the contents to the service to handle the logic, addToCart, 
    // while feeding it with the contents(id, and quantity) we offloaded previously 
    // so we dont overload this controller with too much responsibilties for us ====>
    const addToCartService = addinToCart(transactionDetails)
// Now Go to service  ===> 



// Finally this collects the readily-processed addinToCart method's output and renders it to the user 
res.send(addToCartService)


}



































export function sayHello(req: Request, res: Response) {
    res.send("Welcome")

}

//get All Categories
export function getAssessmentCategories(req:Request, res: Response) {
   const assessCatgories = Db.categories
   res.send(assessCatgories)
}

export function getAssessmentByCategoryId(req:Request, res: Response){
const categoryId = req.params.categoryId
const requestedAssessment = getAssessment({categoryId: Number(categoryId)});
if(!requestedAssessment){
    res.status(404).send("Assessment Not Found")
    return;
}
res.send(requestedAssessment)
    
}

export function getQuestionsByAssessmentId(req:Request, res: Response){
    const assessmentId = req.params.assessmentId
    const requestedQuestions = getQuestions(Number(assessmentId));
    if (!requestedQuestions) {
        res.status(404).send("Question Not Found");
        return;
    }
    res.send(requestedQuestions)
}


export function submitResponse(req:Request, res: Response){
    const assessmentId = req.params.assessmentId
    const response = req.body as {userId: number; questionId: number; answer: number}
    
    res.send(incrementScore(Number(assessmentId), response))

    // res.send(calculateScore(Number(assessmentId), response))
}























// export function getResult(req:Request, res: Response) {
// const resultDetails = req.body as {assessmentId:number, userId: number}
// const printresult= printResult(resultDetails)
    
//     res.send(printresult)
    
// }



