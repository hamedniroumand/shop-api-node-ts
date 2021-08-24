import {Request, Response} from "express";

export default new class productsController {
    constructor() {
    }

    public index(req: Request, res: Response) {
        return res.send({products: []})
    }
}