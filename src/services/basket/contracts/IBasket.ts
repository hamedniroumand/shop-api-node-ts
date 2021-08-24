import IProduct from "../../../modules/products/model/IProduct";

export default interface IBasket {

    add(product: IProduct): Promise<void>;
    remove(product: IProduct): void;
    items(): Promise<IProduct[]>;
    count(): Promise<number>;
    clear(): Promise<void>;
    total(): Promise<number>;
    has(product: IProduct): Promise<boolean>;

}