import AbstractCouponHandler from "../AbstractCouponHandler";
import IUser from "../../../../modules/users/model/IUser";
import ICoupon from "../../../../modules/coupon/model/ICoupon";

export default class ExpireHandler extends AbstractCouponHandler {
    process(user: IUser, coupon: ICoupon): ICoupon | null {
        const now = new Date();
        if(coupon.expires_at < now) {
            throw new Error("this coupon is expired")
        }
        return super.process(user, coupon);
    }
}