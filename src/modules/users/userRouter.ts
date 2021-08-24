import {Router} from "express";
import usersController from "./usersController";

const userRouter = Router();

userRouter.get("/", usersController.index);
userRouter.post("/", usersController.store);

export default userRouter;