import { Address } from "./address";
import { Customer } from "./customer";
import { Order } from "./order";
import { OrderItem } from "./order-item";

export class Puarchase {
    customer: Customer | undefined;
    shippingAddress: Address | undefined;
    billingAddress: Address | undefined;
    order!: Order;
    orderItems: OrderItem[] | undefined;
}
