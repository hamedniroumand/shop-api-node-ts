import AbstractCouponHandler from "../AbstractCouponHandler";
import IUser from "../../../../modules/users/model/IUser";
import ICoupon from "../../../../modules/coupon/model/ICoupon";

export default class LimitHandler extends AbstractCouponHandler {
    process(user: IUser, coupon: ICoupon): ICoupon | null {
        const now = new Date();
        if(coupon.used >= coupon.limit) {
            throw new Error("the limit of this coupon is ended")
        }
        return super.process(user, coupon);
    }
}