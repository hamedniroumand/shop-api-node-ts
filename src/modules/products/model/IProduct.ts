import {Document} from "mongoose";
import ProductStatus from "./ProductStatus";
import IProductAttribute from "./IProductAttribute";

export default interface IProduct extends Document {
    title: string;
    price: number;
    sale_price: number;
    thumbnail: string;
    gallery: [string];
    status: ProductStatus;
    product_category: string,
    attributes: [IProductAttribute],
    created_at: Date;
    updated_at: Date;
}