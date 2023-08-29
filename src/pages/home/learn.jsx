import Header from "@/components/Beginner/Header";
import LearnCards from "@/components/LearnCards.jsx"
import image1 from "../../../public/1.png";
import tradingImage from "../../../public/Trading.jpeg"
import tradingImage1 from "../../../public/trading1.jpeg"
import tradingImage2 from "../../../public/trading2.jpeg"
import tradingImage3 from "../../../public/trading3.jpeg"
import tradingImage4 from "../../../public/trading4.jpeg"
import tradingImage5 from "../../../public/trading5.jpeg"

export default function Learn() {


    return (
        <div>
            <Header></Header>
            <div>
                <div style={{ color: "white", textAlign: "center", padding: "40px", fontSize: "30px" ,fontWeight:"bolder"}}>Welcome to Alpha Learning Section !!</div>
                <div className="flex" style={{ margin: "20px 30px 0px 100px",flexWrap:"wrap",justifyContent:"center" }}>

                    <LearnCards heading={"Guide to trade the Crypto"} body={"This is begginers guide to buy and sell digital currencies."} image1={tradingImage} link={"https://cointelegraph.com/trading-for-beginners/how-to-trade-cryptocurrencies-the-ultimate-beginners-guide"}></LearnCards>

                    <LearnCards heading={"Crypto Basics"} body={"This is the complete guide to learn about the cryptocurrencies from scratch"}
                        link={"http://coinbase.com/learn/crypto-basics"} image1={tradingImage1}></LearnCards>

                    <LearnCards heading={"Blockchain Technology"} body={"Here is the complete guide for consensus mechanism like proof of works"}
                        link={"https://www.sofi.com/crypto-guide/"} image1={tradingImage2}></LearnCards>

                    <LearnCards heading={"Steps involved in Trading"} body={"Here is the complete guide How to trade cryptocurrency"} link={"https://www.analyticsinsight.net/how-to-trade-cryptocurrency-a-beginners-guide/"} image1={tradingImage3}></LearnCards>

                    <LearnCards heading={"Frauds and Scams"} body={"How to secure wallets and cryptocurrency"} link={"https://www.kaspersky.com/resource-center/definitions/what-is-cryptocurrency"} image1={tradingImage4}></LearnCards>
               
                    <LearnCards heading={"Working Principle of crypto"} body={"Heres the complete about the pronciple of Decentralisation in cryptocurrency"} link={"https://www.thetimes.co.uk/money-mentor/article/how-cryptocurrency-works/"} image1={tradingImage5}></LearnCards>
                </div>
            </div>
        </div>
    )




}

