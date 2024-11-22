

class CartDetails{
    // We are making cartId optional at first, cos we dont expect a newcommer 
    // to have a cart until a purchase is made, then he could go ahead and have a cartId
    cartId?: number;

    productId: number;

    amount: number;

    quantity: number;


}

export default CartDetails