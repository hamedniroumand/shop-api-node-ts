import IBasket from "../contracts/IBasket";
import IProduct from "../../../modules/products/model/IProduct";

export default class BasketMemoryProvider implements IBasket {

    private basketItems: IProduct[] = [];

    async add(product: IProduct): Promise<void> {
        this.basketItems.push(product);
    }

    async clear(): Promise<void> {
        this.basketItems = [];
    }

    count(): Promise<number> {
        return Promise.resolve(this.basketItems.length);
    }

    items(): Promise<IProduct[]> {
        return Promise.resolve(this.basketItems);
    }

    remove(product: IProduct): void {
        if(this.has(product)) {
            this.basketItems.splice(this.basketItems.indexOf(product), 1)
        }
    }

    total(): Promise<number> {
        const total = this.basketItems.reduce((total, product: IProduct) => {
            return total + product.price;
        }, 0);
        return Promise.resolve(total);
    }

    has(product: IProduct): Promise<boolean> {
        return Promise.resolve(this.basketItems.includes(product));
    }

}