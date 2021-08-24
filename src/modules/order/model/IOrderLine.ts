import {Document} from "mongoose";

export default interface IOrderLine extends Document {
    order: object;
    price: number;
    product: object;
    created_at: Date;
}