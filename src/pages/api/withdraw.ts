import protect from '@/lib/protect';
import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose';
import { Coin } from '@/lib/database/model';
import Web3 from "web3";

const web3 = new Web3(new Web3.providers.HttpProvider("https://api.avax-test.network/ext/bc/C/rpc"));

async function createTransaction(amount: string,address:string) {

    const value = web3.utils.toWei(amount);


    const nonce = await web3.eth.getTransactionCount("0xC6c5c15BE51eF2614b3F3d0b6E21CC1A3C827590", 'latest');
    console.log("Nonce" + nonce)
    const transaction = {
        'to': address, // faucet address to return eth
        'value': value,
        'gas': 8000000,
        'nonce': nonce,

    };

    const signedTx = await web3.eth.accounts.signTransaction(transaction, "0x2670dcc196727cd22823dc575e7c50e3a6e48b80b1b5a2e213242a2c3ab628b8");

    return signedTx

}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { flag, email } = protect(req);

    if (!flag) {
        res.json({ msg: "Invalid", flag: false });

        return;
    }



    const amount = req.body.amount;
    const coin = req.body.coin
    const address = req.body.address;

    console.log(coin)
    const getBalance = await fetch("http://localhost:3000/api/userwallet/singlecoin", {
        method: "POST",
        body: JSON.stringify({ coin }),
        headers: {
            Cookie: req.headers.cookie || ""
        }
    })


    const balance = await getBalance.json();

    console.log(amount, balance.amount)

    if (amount > balance.amount) {

        res.json({
            flag: false,
            msg: "Not enough balance"
        })

        return;
    }
    else {

        //Reduce the balance from user account

        let reduce = balance.amount - amount;
        let update;
        let hash;
        switch (coin) {
            case "AVAX":
                update = await Coin.findOneAndUpdate({ email }, { AVAX: reduce }, {
                    new: true
                })

                let signedTx = await createTransaction(amount,address);

                web3.eth.sendSignedTransaction(signedTx.rawTransaction || "", function (error, hash) {
                    if (!error) {
                        console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");

                        res.json({ flag: true, hash })
                    } else {
                        console.log("❗Something went wrong while submitting your transaction:", error)
                        res.json({ falg: false, error });
                    }
                });


                break;
            case "ETH":
                update = await Coin.findOneAndUpdate({ email }, { ETH: reduce }, {
                    new: true
                })
                let signedTx1 = await createTransaction(amount,address);

                web3.eth.sendSignedTransaction(signedTx1.rawTransaction || "", function (error, hash) {
                    if (!error) {
                        console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");

                        res.json({ flag: true, hash })
                    } else {
                        console.log("❗Something went wrong while submitting your transaction:", error)
                        res.json({ falg: false, error });
                    }
                });
                break;

            case "BTC":
                update = await Coin.findOneAndUpdate({ email }, { BTC: reduce }, {
                    new: true
                })
                let signedTx2 = await createTransaction(amount,address);

                web3.eth.sendSignedTransaction(signedTx2.rawTransaction || "", function (error, hash) {
                    if (!error) {
                        console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");

                        res.json({ flag: true, hash })
                    } else {
                        console.log("❗Something went wrong while submitting your transaction:", error)
                        res.json({ falg: false, error });
                    }
                });
                break;

            default:
                res.json({ flag: false })



        }


        //Send to users wallet



    }




}