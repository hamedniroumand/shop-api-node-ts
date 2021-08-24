import { Application, Router } from "express";


export default class RouteEngine {

    private app: Application;
    private routers: Map<string, Router> = new Map<string, Router>();

    constructor(app: Application){
        this.app = app;
    }

    public registerRoute(route: string, router: Router){
        this.routers.set(route, router);
    }

    getRouters() {
        return this.routers;
    }
}