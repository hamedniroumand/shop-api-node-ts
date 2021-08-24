import express from "express";
import {Application} from "express";
import RouteService from "./routes/routeService";

export default class App {
    public app: Application;
    public port: number;
    private router: RouteService;

    constructor(port: number){
        this.port = port;
        this.app = express();
        this.router = new RouteService(this.app);
    }

    public start(): void {
        this.router.run();
        this.app.listen(this.port, () => {
            console.log("application is running ...")
        })
    }

}
