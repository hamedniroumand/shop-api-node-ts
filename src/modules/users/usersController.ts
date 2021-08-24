import {Request, Response} from "express";
import User from "./model/User";

export default new class usersController {

    constructor() {
    }

    public async index(req: Request, res: Response) {
        const users = await User.find();
        return res.send({users})
    }

    public async store(req: Request, res: Response) {
        const newUser = await User.create({
            first_name: "Hamed",
            last_name: "Niroomand",
            email: "hamedniroomand@gmail.com",
            mobile: "09154443441"
        });
        newUser.address.push({
            title: "حانه",
            state: "خراسان رضوی",
            city: "مشهد",
            address: "حجت 3 پلاک 23",
            full_name: "حامد نیرومند",
            zip_code: "1234567890",
            mobile: "09154443441"
        });
        await newUser.save();
        res.send({newUser});
    }

}