import protect from '@/lib/protect';
import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose';
import { Coin } from '@/lib/database/model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {



    const { flag, email } = protect(req);

    if (!flag) {
        res.json({ msg: "Invalid",flag:false });

        return;
    }

    const amount = Number(req.body.amount);

    mongoose.connect(process.env.MONGO|| "");

    let get_coin = await Coin.findOne({ email })

    let current_balance = Number(get_coin["INR"]);

   let update = await Coin.findOneAndUpdate({email},{INR:current_balance+amount},{
        new:true
    })

    res.json({msg:update,flag:true})

}