
import mongoose from "mongoose";
import protect from '@/lib/protect';

import { Coin } from '@/lib/database/model';

export default async function handler(req, res) {


    const { flag, email } = protect(req);

    let { coin1, coin1Amount, coin2, coin2Amount } = JSON.parse(req.body)

    if (coin2 == "ethereum") {
        coin2 = "ETH"
    }
    else if (coin2 == "bitcoin") {
        coin2 = "BTC"
    }
    else if (coin2 == "tether") {
        coin2 = "USDT"
    }
    else if(coin2 == "avalanche-2"){
        coin2 = "AVAX"
    }

    coin1 = coin1.toUpperCase()
    const checkBalanceReq = await fetch("http://localhost:3000/api/userwallet/singlecoin", {
        headers: {
            Cookie: req.headers.cookie
        },
        method: "POST",
        body: JSON.stringify({ coin: coin1 })
    })

    const balance = await checkBalanceReq.json();

    if (balance.amount < coin1Amount) {
        res.json({ flag: false, msg: "Not enough amount in your wallet" })
        return;
    }

    mongoose.connect(process.env.MONGO|| "");

    const getFullBalanceReq = await fetch("http://localhost:3000/api/userwallet/fullbalance", {
        method: "GET",
        headers: {
            Cookie: req.headers.cookie
        }
    })

    const fullBalance = await getFullBalanceReq.json();
    
    let balances = fullBalance.coins
    
    let currentCoin1Amount = balances[coin1];
    let currentCoin2Amount = balances[coin2]
    console.log(currentCoin1Amount,currentCoin2Amount)
    balances[coin1] = Number(currentCoin1Amount) - Number(coin1Amount);
    balances[coin2] = Number(currentCoin2Amount) + Number(coin2Amount);


    let update = await Coin.findOneAndUpdate({email},balances,{
        new:true
    })

    console.log(update)

    res.json({ flag:true,msg:"Trade executed" })


}