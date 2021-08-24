import {Application, Router} from "express";
import RouteEngine from "./routeEngine";
import userRouter from "../modules/users/userRouter";
import productRouter from "../modules/products/productRouter";

export default class RouteService {

    private router: RouteEngine;

    constructor(private app: Application) {
        this.router = new RouteEngine(this.app)
        this.bindRouter();
    }

    bindRouter(){
        this.router.registerRoute("/api/v1/users", userRouter);
        this.router.registerRoute("/api/v1/products", productRouter);
    }

    run() {
        this.router.getRouters().forEach((router:Router, route:string) => {
            this.app.use(route, router);
        })
    }
}