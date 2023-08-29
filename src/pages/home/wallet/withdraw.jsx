import Image from "next/image";
import { useEffect } from "react"
import { useState } from "react"
import Header from "@/components/Beginner/Header";

export default function Withdraw() {


    const [coin, setCoin] = useState("AVAX")
    const [balance, setBalance] = useState(0);
    const [transferred, setTransferred] = useState(false)
    const [hashDisplay, setHashDisplay] = useState("");
    const [error, setError] = useState("")

    const [address, setAddress] = useState("")
    const [network, setNetwork] = useState("Avalanche")
    const [amount, setAmount] = useState(0)

    function amountHandler(e) {

        setAmount(e.target.value)
    }


    function addressHandler(e) {

        setAddress(e.target.value)


    }


    function networkHandler(e) {

        setNetwork(e.target.value)
    }



    function coinChangeHandler(e) {

        setCoin(e.target.value)


    }


    async function withdrawCrypto(e) {
        e.preventDefault()
        if (!amount || !address) {
            alert("Enter all field");
        }
        else {
            console.log(coin)
            const res = await fetch("/api/withdraw", {
                method: "POST",
                body: JSON.stringify({ amount, address, coin }),
                headers: {
                    'Content-Type': "application/json"
                }
            })

            const withdrawRes = await res.json();

            console.log(withdrawRes)
            if (withdrawRes.flag) {
                setError(false)
                setTransferred(true)
                setTimeout(() => {
                    setTransferred(false)
                }, 3000)

                setHashDisplay(withdrawRes.hash)

            }
            else {
                setError(withdrawRes.msg)
            }


        }


    }

    useEffect(() => {

        fetch("/api/userwallet/singlecoin", {
            method: "POST",
            body: JSON.stringify({ coin: coin })
        }).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
            setBalance(data.amount)

        })
    }, [coin])


    return (
        <div style={{ overflowY: "hidden" }}>

            <Header></Header>
            {transferred && <div className="text-white" style={{ position: "absolute", zIndex: "1", left: "750px",top:"300px" }}><Image width={400} height={200} src={require('../../../../public/withdraw.gif')} alt="Loading" /></div>}

            <div style={{
                display: "flex", flexDirection: "column", alignItems: 'center', margin: "70px 600px 0px", color: "white", backgroundColor: "black"
                , padding: "50px 0px 100px"
            }}>
                <div className="text-white" style={{ fontSize: "30px", paddingBottom: "20px" }}>Send Crypto</div>

                <form style={{ fontSize: "22px" }} onSubmit={withdrawCrypto}>

                    <div style={{ padding: "10px 0px" }}>
                        Coin
                    </div>

                    <div>
                        <select onChange={coinChangeHandler} id="countries" className="text-xs rounded-lg block w-15 p-2.5 dark:bg-gray-700 dark:border-gray-600">
                            <option value="AVAX">AVAX</option>
                            <option value="BTC">BTC</option>
                            <option value="ETH">ETH</option>
                            <option value="USDT">USDT</option>

                        </select>
                    </div>

                    <div style={{ padding: "20px 0px 20px" }}>
                        Address
                    </div>
                    <div >
                        <input onChange={addressHandler} style={{ color: "black",fontSize:"17px",width:"300px",height:"40px" }} type="text" />
                    </div>

                    <div style={{ padding: "20px 0px 20px" }}>
                        Network
                    </div>


                    <div style={{ fontSize: "20px" }} className="relative w-full">
                        <select onChange={networkHandler} className="w-full p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none ">
                            <option>Avalanche</option>
                            <option>Binance Chain</option>
                            <option>Ethereum</option>


                        </select>
                    </div>


                    <div style={{ padding: "20px 0px 20px" }}>
                        Amount  <span style={{ fontSize: "15px" }}>{balance}</span>
                    </div>
                    <div>
                        <input onChange={amountHandler} style={{ color: "black" }} type="text" />
                    </div>

                    <div>
                        <div className="mt-10 text-center bg-rose-900 h-10 rounded-lg">
                            <button className="" style={{ width: "100%" }}>Transfer</button>
                        </div>
                    </div>
                </form>

                {hashDisplay && <div style={{ paddingTop: "40px", textAlign: 'center' }}>
                    Transaction Hash <br />
                    <a target="_blank" href={"https://testnet.snowtrace.io/tx/" + hashDisplay}>{hashDisplay}</a>
                </div>}

                {error && <div style={{ paddingTop: "20px" }}>{error}</div>}
            </div>


        </div>
    )


}