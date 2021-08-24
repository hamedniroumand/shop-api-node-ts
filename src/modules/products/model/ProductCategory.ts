import {Schema, model} from "mongoose";
import IProductCategory from "./IProductCategory";

const productCategorySchema = new Schema({
    title: {type: String, required: true },
    total_price: {type: Number, required: true },
    attributes: {type: [Object], default: 0 },
});

export default model<IProductCategory>("ProductCategory", productCategorySchema);