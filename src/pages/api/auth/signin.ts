
import type { NextApiRequest, NextApiResponse } from 'next'
import User from "../../../lib/database/model";
import mongoose from 'mongoose';
import { Coin } from "@/lib/database/model";
interface Data extends NextApiRequest {
    body: {
        email: String,
        password: String,
        confirm: String
    }
}

export default async function handler(req: Data, res: NextApiResponse) {


    if (req.method == "POST") {

        let { email, password, confirm } = req.body;

        console.log(email);
        mongoose.connect(process.env.MONGO|| "");

        const findUser = await User.findOne({ email });

        console.log(findUser);

        if (findUser === null) {
            console.log("Hello")
            new User({ email, password }).save().then((result: any) => {

                new Coin({
                    email,
                    BTC: 0,
                    ETH: 0,
                    INR: 0,
                    USDT:0,
                    AVAX:0
                }).save().then((result: any) => {
                    console.log(result)
                    res.json({ msg: "Success", flag: true });
                })


            })


        }
        else {

            res.json({ msg: "User already exist", flag: false })
        }



    }
    else {

        res.status(401).json({ msg: "Error" });
    }



}