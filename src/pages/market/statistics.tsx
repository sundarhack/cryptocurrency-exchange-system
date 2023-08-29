
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Header from "@/components/Beginner/Header";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const marketcap = {
    "btc": 44.09575005078369,
    "eth": 18.265250034640914,
    "usdt": 6.50064953763582,
    "bnb": 3.9972973121377686,
    "usdc": 2.65262019585953,
    "xrp": 2.0951060658166396,
    "ada": 1.1132702772965644,
    "doge": 1.090477489925631,
    "steth": 0.8945337179563337,
    "matic": 0.8339268207850159
}

const labels = Object.keys(marketcap)

const valuesOfcap = Object.values(marketcap)

export const data = {
    labels,
    datasets: [
        {
            label: 'Market Cap',
            data: labels.map((v, i) => {

                return valuesOfcap[i]
            }),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },

    ],
};

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: ' Crypto currency market cap',
        },
    },
};



export default function Statistics() {


    return (
        <>
            <Header></Header>
            <div style={{ color: "white" }}>

                <div style={{ fontSize: "30px", textAlign: "center", textDecoration: "underline  2px", fontWeight: "bolder", marginTop: "20px" }}>The Details that you always Wanted!!</div>
                <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ height: "700px", width: "50%", margin: "100px 0px 0px 0px" }}>
                        <div style={{ color: "white", textAlign: "center", fontSize: "30px", fontWeight: "lighter" }}>Total market Cap</div>
                        <div >
                            <Bar options={options} data={data} />
                        </div>

                    </div>

                    <div style={{ margin: "50px 10px", width: "50%", alignContent: "center", textAlign: "center" }}>

                        <div style={{ color: "white", textAlign: "center", fontSize: "30px", fontWeight: "lighter" }}>Decentralised Finance Stats</div>

                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}>
                            <div style={{ margin: "50px", fontSize: "22px" }}>
                                <div style={{ display: "inline-block", }}>DeFi Market Cap: </div> <span style={{ fontWeight: "bolder", display: "inline-block" }}>49214845838.9148001171633413891</span>
                            </div>

                            <div style={{ margin: "50px" }}>
                                <span>ETH Market Cap: </span> <span style={{ fontWeight: "bolder", display: "inline-block" }}>224321458499.6000719171851257543</span>
                            </div>

                            <div style={{ margin: "50px" }}>
                                <span>Defi to ETH Ratio: </span> <span style={{ fontWeight: "bolder", display: "inline-block" }}>21.93</span>
                            </div>

                            <div style={{ margin: "50px" }}>
                                <span>Trading Volume:</span> <span style={{ fontWeight: "bolder", display: "inline-block" }}>2813373007.60140562557421245951</span>
                            </div>

                            <div style={{ margin: "50px" }}>
                                <span>Top Coin:</span> <span style={{ fontWeight: "bolder", display: "inline-block" }}> Lido Staked Ether</span>
                            </div>

                        </div>
                    </div>


                    <div>



                    </div>
                </div>
            </div></>
    )
}









