import IUser from "../../../modules/users/model/IUser";
import ICoupon from "../../../modules/coupon/model/ICoupon";
import ExpireHandler from "./handlers/ExpireHandler";
import LimitHandler from "./handlers/LimitHandler";

export default class CouponValidator {
    handler(user: IUser, coupon: ICoupon) {

        const expireHandler = new ExpireHandler();
        const limitHandler = new LimitHandler();

        expireHandler.setNext(limitHandler);
        return expireHandler.process(user, coupon);

    }
}