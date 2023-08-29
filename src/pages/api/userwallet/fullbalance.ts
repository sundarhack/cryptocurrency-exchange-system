import protect from "@/lib/protect";
import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import { Coin, CointType } from "@/lib/database/model";




export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method == 'GET') {


        console.log("Hello");
        const { flag, email } = protect(req);

        console.log(email)
        if (!flag) {
            res.json({ msg: "Invalid User" });
            return;
        }

        mongoose.connect(process.env.MONGO|| "");

        let get_coin = await Coin.findOne({ email });

        let obj: any = Object.entries(get_coin)[2][1];
        delete obj["_id"];
        delete obj["email"];
        delete obj["__v"];


        res.json({ coins: obj })
    }
    else{

        res.json({msg:"Invalid Request"})
    }
}