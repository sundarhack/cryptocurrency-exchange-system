import protect from "@/lib/protect";
import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import { Coin } from "@/lib/database/model";




export default async function handler(req: NextApiRequest, res: NextApiResponse) {


    const { flag, email } = protect(req);

    console.log(email)
    if (!flag) {
        res.json({ msg: "Invalid User" });
        return;
    }

    const coin = JSON.parse(req.body).coin
   
    mongoose.connect(process.env.MONGO|| "");
    console.log(coin)
    let get_coin = await Coin.findOne({ email })
 
    let coin_amount = get_coin[coin]
   
    res.json({ amount: coin_amount })

}

