import IBasket from "./contracts/IBasket";
import BasketMemoryProvider from "./providers/BasketMemoryProvider";
import BasketRedisProvider from "./providers/BasketRedisProvider";

export default class BasketProviderFactory {

    private providers: Map<string, IBasket> = new Map<string, IBasket>();

    constructor() {
        this.providers.set("memory", new BasketMemoryProvider());
        this.providers.set("redis", new BasketRedisProvider());
    }

    registerProvider(name: string, provider: IBasket) {
        if(!this.hasProvider(name)) {
            this.providers.set(name, provider);
        }
    }

    getProvider(name: string): IBasket {
        if(!this.hasProvider(name)) {
            throw new Error(`Provider ${name} does not exist`)
        }
        return this.providers.get(name) as IBasket;
    }

    private hasProvider(name: string): boolean {
        return this.providers.has(name);
    }

}