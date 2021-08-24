import IBasket from "../contracts/IBasket";
import IProduct from "../../../modules/products/model/IProduct";
import redisConnection from "../../../../infrastructure/connections/redis";
import IBasketConfigurable from "../contracts/IBasketConfigurable";

export default class BasketRedisProvider implements IBasket, IBasketConfigurable {

    private key: string = "";

    async add(product: IProduct): Promise<void> {
        redisConnection.get(this.key)
            .then(result => {
                if(result) {
                    const items = JSON.parse(result as string);
                    items.push(product);
                    redisConnection.set(this.key, JSON.stringify(items))
                }
            }).catch(err => {
            console.log(`redis can not fetch basket items : ${err.message}`);
        })
    }

    async clear(): Promise<void> {
        await redisConnection.del(this.key)
    }

    async count(): Promise<number> {
        const items = await this.getItems();
        return  items.length;
    }

    async has(product: IProduct): Promise<boolean> {
        const items = await this.getItems();
        return items.includes(product);
    }

    async items(): Promise<IProduct[]> {
        return await this.getItems();
    }

    remove(product: IProduct): void {
        redisConnection.get(this.key)
            .then((result) => {
                if(result) {
                    const items = JSON.parse(result as string);
                    items.splice(items.indexOf(product), 1);
                    redisConnection.set(this.key, JSON.stringify(items))
                        .then(result => {})
                        .catch(err => {});
                }
            }).catch(err => {
            console.log(`redis can not fetch basket items : ${err.message}`)
        });
    }

    async total(): Promise<number> {
        const items = await this.getItems();
        return items.reduce((total: number, product: IProduct) => {
            return total + product.price;
        }, 0);
    }

    private async getItems(): Promise<IProduct[]> {
        const items = await redisConnection.get(this.key)
            .then(result => result)
            .catch(err => false);
        if(items) {
            return JSON.parse(items as string);
        }
        return [];
    }

    config(config: any): void {
        this.key = config;
    }

}