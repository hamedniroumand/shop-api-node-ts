import {Schema, model} from "mongoose";
import IProduct from "./IProduct";
import ProductStatus from "./ProductStatus";

const productSchema = new Schema({
    title: {type: String, required: true },
    price: {type: Number, required: true },
    sale_price: {type: Number, default: 0 },
    thumbnail: {type: String, required: true },
    gallery: {type: [String]},
    status: {type: ProductStatus, default: ProductStatus.INIT},
    product_category: {type: Schema.Types.ObjectId, ref: 'productCategory'},
    attributes: {type: [Object], required: true},
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()},
});

export default model<IProduct>("Product", productSchema);