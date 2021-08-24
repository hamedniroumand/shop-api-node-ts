import {Schema, model} from "mongoose";
import ICoupon from "./ICoupon";
import CouponStatus from "./CouponStatus";


const couponSchema: Schema = new Schema({
    code: {type: String, required: true},
    amount: {type: Number, required: true},
    limit: {type: Number, default: 0},
    used: {type: Number, default: 0},
    expires_at: {type: Date, default: null},
    constrains: {type: Object, default: null},
    status: {type: CouponStatus, default: CouponStatus.ACTIVE},
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()},
});

export default model<ICoupon>("Coupon", couponSchema);