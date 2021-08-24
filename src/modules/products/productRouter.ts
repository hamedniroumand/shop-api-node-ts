import {Router} from "express";
import productsController from "./productsController";

const productRouter = Router();

productRouter.get("/", productsController.index);

export default productRouter;