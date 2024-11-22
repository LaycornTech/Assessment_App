import CartDetails from "./cartdetails.entity";


class Cart{
    id: number;

    userId: number;


    totalAMount: number;

    cartDetails: CartDetails[]
    // We are making cartDetails an array cos we expect it to serve as a 
    // bag or container holding the purchases of the customer 
}

export default Cart