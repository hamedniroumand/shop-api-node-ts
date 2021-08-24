import ICoupon from "../../../modules/coupon/model/ICoupon";
import IUser from "../../../modules/users/model/IUser";

export default interface ICouponHandler {
    setNext(handler: ICouponHandler): ICouponHandler;
    process(user: IUser, coupon: ICoupon): ICoupon|null;
}