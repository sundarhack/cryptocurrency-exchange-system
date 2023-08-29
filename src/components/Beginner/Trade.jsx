

import { useEffect, useRef, useState } from "react";
import styles from "./Trade.module.css";

export default function Trade() {


    const [traded, setTraded] = useState(false)
    const [msg, setMsg] = useState("")

    //Amount that user will get for a particular input
    const [coin2Price, setCoin2Price] = useState(0);

    async function getCoin2Price(e) {
        try {

            if (searchCoin1 == "INR") {

                const req = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${searchCoin2}&vs_currencies=usd`)

                const res = await req.json();
                console.log("res")
                const price = res[searchCoin2].usd * 83;
                console.log(price);
                const amountUserget = e.target.value / price;
                setCoin2Price((amountUserget.toFixed(6)));

            }
            else if (searchCoin2 == "INR") {

                let coin = ""
                if (searchCoin1 == "eth") {
                    coin = "ethereum"
                }
                else if (searchCoin1 == "btc") {
                    coin = "bitcoin"
                }
                else if(searchCoin1 == "avax"){
                    coin = "avalanche-2"
                }

             
               
                const req = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`)

                const res = await req.json();
                console.log(res);
                const priceOfOneSearchCoin1 = res[coin].usd * 83;
                setCoin2Price((priceOfOneSearchCoin1 * e.target.value).toFixed(6))
            }
            else {
                const req = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${searchCoin2}&vs_currencies=${searchCoin1}`)
                console.log(`https://api.coingecko.com/api/v3/simple/price?ids=${searchCoin2}&vs_currencies=${searchCoin1}`)
                const res = await req.json();
                console.log("res")
                const one_searchCoin2 = res[searchCoin2][searchCoin1];
                const one_searchCoin1 = 1 / one_searchCoin2;


                setCoin2Price((one_searchCoin1 * e.target.value).toFixed(6));

            }

        }
        catch (e) {

        }
    }




    async function swap() {


        const swapData = {
            coin1: searchCoin1,
            coin1Amount: coin1Amount.current.value,
            coin2: searchCoin2,
            coin2Amount: coin2Price
        }


        const req = await fetch("/api/trade", {
            method: "POST",
            body: JSON.stringify(swapData)
        })

        const res = await req.json();
        setTraded(true);
        setMsg(res.msg);
    }


    //Coin in the dropbox
    const [searchCoin1, getCoin1] = useState("INR");
    const [searchCoin2, getCoin2] = useState("ethereum");


    //Total amount of coin user hold
    const [coin1, setCoin1] = useState(0);
    const [coin2, setCoin2] = useState(0)

    //Coin amount the user typing
    const coin1Amount = useRef(0);
    const coin2Amount = useRef(0);

    useEffect(() => {
        let coinS = searchCoin2;
        if (searchCoin2 == "bitcoin") {
            coinS = "BTC";
        }
        else if (searchCoin2 == "ethereum") {
            coinS = "ETH"
        }
        else if (searchCoin2 == "tether") {
            coinS = "USDT"
        }
        else if(searchCoin2 == "avalanche-2"){
            coinS = "AVAX"
        }

        fetch("/api/userwallet/singlecoin", {
            method: "POST",
            body: JSON.stringify({ coin: searchCoin1.toUpperCase() })
        }).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
            setCoin1(data.amount.toFixed(6));
        })


        fetch("/api/userwallet/singlecoin", {
            method: "POST",
            body: JSON.stringify({ coin: coinS.toUpperCase() })
        }).then((res) => {
            return res.json()
        }).then((data) => {
            setCoin2(data.amount.toFixed(6));
        })

    }, [searchCoin1, searchCoin2])




    function coin2ChangeHandler(e) {

        getCoin2(e.target.value)



    }


    function coin1ChangeHandler(e) {

        getCoin1(e.target.value)


    }

    return (

        <>

            <div style={{ height: "100%", backgroundColor: "#111827" }}>

                <div className="flex content-center justify-center" style={{ padding: "100px" }}>
                    <div className="text-white rounded-xl " style={{ backgroundColor: "#1f2937", }}>
                        <div className="p-10">

                            <div>
                                {/* <div>
                                Buy or Sell the crypto You want
                            </div> */}
                                <div>
                                    <div className="flex">

                                        <select onChange={coin1ChangeHandler} id="countries" className="text-xs rounded-lg block w-15 p-2.5 dark:bg-gray-700 dark:border-gray-600">
                                            <option value="INR">INR</option>
                                            <option value="btc">BTC</option>
                                            <option value="eth">ETH</option>
                                            <option value="usdt">USDT</option>
                                            <option value="avax">AVAX</option>
                                            {/* <option value="avax">AVAX</option> */}
                                        </select>

                                        <div style={{ padding: "10px 0px 0px 10px" }}>{coin1}</div>
                                    </div>

                                </div>
                                <div className="mt-2">
                                    <input onChange={getCoin2Price} ref={coin1Amount} placeholder="0" className="w-200 h-12 rounded-lg text-black border-none outline-none p-2" />
                                </div>
                            </div>
                            <div className="my-10 text-center">
                                <svg fill="white" viewBox="0 0 24 24" className="sc-4ba21b47-0 hgqOyz _1cvvxtw3 block text-center m-auto" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"></path></svg>
                            </div>

                            <div>

                                <div>
                                    <div className="flex">

                                        <select onChange={coin2ChangeHandler} id="countries" className="text-xs rounded-lg block w-15 p-2.5 dark:bg-gray-700 dark:border-gray-600">
                                            {/* <option value="avalanche-2">AVAX</option> */}
                                            <option value="ethereum">ETH</option>
                                            <option value="tether">USDT</option>
                                            <option value="INR">INR</option>
                                            <option value="bitcoin">BTC</option>
                                            <option value="avalanche-2">AVAX</option>


                                        </select>

                                        <div style={{ padding: "10px 0px 0px 10px" }}>{coin2}</div>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <input value={coin2Price} ref={coin2Amount} placeholder="0" className="w-200 h-12 rounded-lg text-black outline-none p-2" />
                                </div>
                            </div>

                            <div className="mt-10 text-center bg-rose-900 h-10 rounded-lg" style={{ width: "100%" }}>
                                <button onClick={swap} className="pt-2" style={{ width: "100%" }}>Trade</button>
                            </div>
                        </div>
                    </div>


                </div>
                {traded && <div className="text-white text-center" style={{ fontSize: "30px" }}>{msg}</div>
                }
            </div>
        </>
    )

}