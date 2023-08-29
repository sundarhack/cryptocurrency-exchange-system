import { useEffect, useState } from "react"
import TrendingCards from "../../components/MarketData/TrendingCards";

import Header from "@/components/Beginner/Header";


const trend = [
    {
      "item": {
        "id": "arbitrum",
        "coin_id": 16547,
        "name": "Arbitrum",
        "symbol": "ARB",
        "market_cap_rank": 39,
        "thumb": "https://assets.coingecko.com/coins/images/16547/thumb/photo_2023-03-29_21.47.00.jpeg?1680097630",
        "small": "https://assets.coingecko.com/coins/images/16547/small/photo_2023-03-29_21.47.00.jpeg?1680097630",
        "large": "https://assets.coingecko.com/coins/images/16547/large/photo_2023-03-29_21.47.00.jpeg?1680097630",
        "slug": "arbitrum",
        "price_btc": 0.000044694500831025146,
        "score": 0
      }
    },
    {
      "item": {
        "id": "xen-crypto",
        "coin_id": 27713,
        "name": "XEN Crypto",
        "symbol": "XEN",
        "market_cap_rank": 534,
        "thumb": "https://assets.coingecko.com/coins/images/27713/thumb/Xen.jpeg?1665453190",
        "small": "https://assets.coingecko.com/coins/images/27713/small/Xen.jpeg?1665453190",
        "large": "https://assets.coingecko.com/coins/images/27713/large/Xen.jpeg?1665453190",
        "slug": "xen-crypto",
        "price_btc": 1.4635180653363868e-10,
        "score": 1
      }
    },
    {
      "item": {
        "id": "ovr",
        "coin_id": 13429,
        "name": "Ovr",
        "symbol": "OVR",
        "market_cap_rank": 860,
        "thumb": "https://assets.coingecko.com/coins/images/13429/thumb/ovr_logo.png?1608518911",
        "small": "https://assets.coingecko.com/coins/images/13429/small/ovr_logo.png?1608518911",
        "large": "https://assets.coingecko.com/coins/images/13429/large/ovr_logo.png?1608518911",
        "slug": "ovr",
        "price_btc": 0.000010444695578009455,
        "score": 2
      }
    },
    {
      "item": {
        "id": "stargate-finance",
        "coin_id": 24413,
        "name": "Stargate Finance",
        "symbol": "STG",
        "market_cap_rank": 234,
        "thumb": "https://assets.coingecko.com/coins/images/24413/thumb/STG_LOGO.png?1647654518",
        "small": "https://assets.coingecko.com/coins/images/24413/small/STG_LOGO.png?1647654518",
        "large": "https://assets.coingecko.com/coins/images/24413/large/STG_LOGO.png?1647654518",
        "slug": "stargate-finance",
        "price_btc": 0.000031289758884691766,
        "score": 3
      }
    },
    {
      "item": {
        "id": "pendle",
        "coin_id": 15069,
        "name": "Pendle",
        "symbol": "PENDLE",
        "market_cap_rank": 466,
        "thumb": "https://assets.coingecko.com/coins/images/15069/thumb/Pendle_Logo_Normal-03.png?1634196276",
        "small": "https://assets.coingecko.com/coins/images/15069/small/Pendle_Logo_Normal-03.png?1634196276",
        "large": "https://assets.coingecko.com/coins/images/15069/large/Pendle_Logo_Normal-03.png?1634196276",
        "slug": "pendle",
        "price_btc": 0.000016994925828116666,
        "score": 4
      }
    },
    {
      "item": {
        "id": "dogecoin",
        "coin_id": 5,
        "name": "Dogecoin",
        "symbol": "DOGE",
        "market_cap_rank": 8,
        "thumb": "https://assets.coingecko.com/coins/images/5/thumb/dogecoin.png?1547792256",
        "small": "https://assets.coingecko.com/coins/images/5/small/dogecoin.png?1547792256",
        "large": "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
        "slug": "dogecoin",
        "price_btc": 0.00000339555939619121,
        "score": 5
      }
    },
    {
      "item": {
        "id": "mangoman-intelligent",
        "coin_id": 26687,
        "name": "MangoMan Intelligent",
        "symbol": "MMIT",
        "market_cap_rank": 334,
        "thumb": "https://assets.coingecko.com/coins/images/26687/thumb/Mr._B.png?1659601403",
        "small": "https://assets.coingecko.com/coins/images/26687/small/Mr._B.png?1659601403",
        "large": "https://assets.coingecko.com/coins/images/26687/large/Mr._B.png?1659601403",
        "slug": "mangoman-intelligent",
        "price_btc": 1.6090180113877558e-11,
        "score": 6
      }
    }
  ]

export default function Trending() {


    const [trending, setTrending] = useState([{}]);
    const [gotTrend, setGotTrend] = useState(false);

    async function getTrending() {

        try {
            const req = await fetch("https://api.coingecko.com/api/v3/search/trending");
            const response = await req.json()
            let trendingCoins = response.coins;
            //    trendingCoins = trendingCoins.map((value,index)=>{
            //     fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${value}&vs_currencies=usd`)

            //     })
            return trendingCoins;
        }
        catch(e){

            throw e
        }
   


    }


    useEffect(() => {

        // getTrending()
        //     .then(data => {
        //         setTrending(data)
        //         setGotTrend(true)
        //     })
        //     .catch(e => {
        //         console.log(e)
        //     })

        setTrending(trend);
        setGotTrend(true)


    }, [])


    return (
        <div>
            <Header></Header>

            <div style={{ fontSize: "30px", color: "white", textAlign: "center", margin: "50px 0px 50px", fontWeight: "bolder" }}>Trending Coins 🔥</div>

            <div style={{ display: "flex", justifyContent: 'start', flexWrap: "wrap", margin: "0px 200px 0px 400px" }}>
                {
                    gotTrend &&


                    trending.map((trend, index) => {

                        console.log(trend.item)
                        return (

                            <div style={{ marginRight: "100px", marginBottom: "100px" }}>
                                <TrendingCards price={trend.item.price_btc} name={trend.item.name || ""} image={trend.item.large} rank={trend.item.market_cap_rank}></TrendingCards>
                            </div>
                        )

                    })
                }

            </div>

        </div>
    )


}