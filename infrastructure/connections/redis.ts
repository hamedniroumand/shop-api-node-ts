import {Tedis} from "tedis";

const redisConnection = new Tedis({
    port: Number(process.env.REDIS_PORT),
    host: process.env.REDIS_HOST
});

export default redisConnection;