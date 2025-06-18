import { CartItem } from './cart-item';
export class OrderItem {
    imgeUrl: string;
    unitPrice: number;
    quantity: number;
    productId: string;

    constructor(CartItem: CartItem) { 
        this.imgeUrl = CartItem.imageUrl;
        this.unitPrice = CartItem.unitPrice;
        this.quantity = CartItem.quantity;
        this.productId = CartItem.id;
    }



}
