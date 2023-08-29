
import styles from "./market.module.css"
import Header from "@/components/Beginner/Header";
import Data from "../../components/MarketData/Data";
import { useEffect } from "react";
import { useState } from "react";
export default function Market() {

    const [coins, setCoins] = useState([{ coin: "", price: 0 }])

    const [coinFetched, setCoinFetched] = useState(false);
    const [error,setError] = useState({error:false,msg:""})

    async function getAllData() {

        const coinData = ["bitcoin", "ethereum","tether","binancecoin","usd-coin","cardano","ripple","avalanche-2"];
        let temp = []
        for (let value of coinData) {

            try {
             
                const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${value}&vs_currencies=usd`);
                const data = await res.json();
               
                temp.push({
                    coin: value,
                    price: data[value].usd
                })
            }
            catch (e) {
                throw e
             
            }

        }

        setCoins(temp)

        console.log(temp)


    }

    useEffect(() => {

        getAllData().then((res)=>{
            setError({error:false,msg:""})
            setCoinFetched(true)
        }
        ).catch(e=>{

            setError({error:true,msg:e})
            console.log("Failed to fetch"+e)
        })
      
       

    }, [])

    return (
        <div className="text-white">
            <Header></Header>
            <div style={{ margin: "0px 200px 0px" }}>

                <div style={{fontSize:"30px",padding:"100px 0px 20px",fontWeight:"bolder"}}>
                    Cryptocurrency Prices by Market Cap
                </div>

                {error.error && <div>Falied to fetch </div>}

                {!error.error && !coinFetched && <div>Fetching Deails</div>}
                {
                    coinFetched &&


                    <div style={{ marginTop: "100px",width:"100%" }}>

                        <table style={{width:"100%"}}>


                            <thead>
                                <tr style={{backgroundColor:"#161d2b"}}> 
                                    <th style={{ padding: "10px 400px 20px 10px",fontSize:'23px',textAlign:"left" }}>Coin</th>
                                    <th style={{ padding: "10px 400px 20px 0px",fontSize:'23px',textAlign:"left" }}>Price (USD)</th>
                                    <th style={{ padding: "10px 0px 20px 0px",fontSize:'23px' ,textAlign:"left"}}>Price (INR)</th>
                              
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    coins.map((value, index) => {
                                            if(index %2 ==0){
                                                return <Data coin={value.coin} priceUSD={value.price} color={"#1e2433"} ></Data>
                                            }
                                          
                                            else{

                                                return <Data coin={value.coin} priceUSD={value.price} color={"#35373c"} ></Data>
                                            }
                                       
                                    })
                                }

                            </tbody>

                        </table>



                    </div>

                }
            </div>



        </div>
    )


}