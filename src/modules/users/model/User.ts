import {Schema, model} from "mongoose";
import IUser from "./IUser";
import addressSchema from "../schema/Address";

const userSchema: Schema = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    mobile: {type: String, required: true, unique: true},
    total_orders: {type: Number, required: false, default: 0},
    wallet: {type: Number, required: false, default: 0},
    address: {type: [addressSchema]},
    created_at: {type: Date, default: Date.now()},
});

export default model<IUser>("User", userSchema);