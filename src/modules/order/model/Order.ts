import {Schema, model} from "mongoose";
import OrderStatus from "./OrderStatus";
import IOrder from "./IOrder";
import orderLineSchema from "../schema/OrderLine";
import addressSchema from "../../users/schema/Address";

const orderSchema: Schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    total_price: {type: Number, required: true},
    coupon: {type: Object, default: null},
    final_price: {type: Number, required: true},
    order_lines: {type: orderLineSchema},
    delivery_address: {type: addressSchema, default: null},
    status: {type: OrderStatus, required: true, default: OrderStatus.INIT},
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()},
});

export default model<IOrder>("Order", orderSchema);