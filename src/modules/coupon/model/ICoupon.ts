import {Document} from "mongoose";
import CouponStatus from "./CouponStatus";

export default interface ICoupon extends Document {
    code: string;
    amount: number;
    limit: number;
    used: number;
    expires_at: Date;
    constrains: object;
    status: CouponStatus;
}