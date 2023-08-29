import { useEffect, useState } from "react"
import data from "./data.js"
import Header from "@/components/Beginner/Header";

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

export default function Categories() {

    const [category, setCategory] = useState({ name: "", market_cap: "", market_cap_change_24h: "", content: "", top_3_coins: [], volume_24h: "" })


    function changeCategory(e) {
        e.preventDefault();
        console.log()
        let category = e.target.value;
        let foo = data.find((element) => element.id === category)
        console.log(foo)
        setCategory(foo)
    }




    return (
        <>
            <div style={{overflow:"hidden"}}>

                <Header></Header>

                <div style={{ color: "white", overflow: "hidden" }}>

                    <div style={{ display: "flex", overflow: "hidden" }}>

                        {/* category list */}
                        <div style={{ width: "30%", overflow: "scroll", height: "100vh" }}>

                            <div style={{ padding: "50px 100px 0px 100px", }}>
                                {data.map((value, index) => {
                                    return (
                                        <div style={{ padding: "20px", border: '1px solid gray', margin: "10px",fontSize:"20px",fontWeight:"bold" }}>

                                            <button value={value.id} onClick={changeCategory}>{value.id.toUpperCase()}</button>
                                        </div>
                                    )
                                })}
                            </div>


                        </div>

                        {/* Category Details */}
                        {category.name && <div style={{ width: "50%" }}>

                            <div style={{ padding: "100px 0px 0px 100px" }}>
                                <div>
                                    <div style={{ fontWeight: "lighter", textDecoration: "1px underline", fontSize: "30px", padding: "0px 0px 20px 0px" }}>Details</div>
                                    <div style={{ padding: "20px 20px 20px 0px", fontSize: "20px" }}>
                                        Name : {category.name}
                                    </div>
                                    <div style={{ padding: "20px 20px 20px 0px", fontSize: "20px" }}>
                                        Market cap :{category.market_cap}
                                    </div>

                                    <div style={{ padding: "20px 20px 20px 0px", fontSize: "20px" }}>
                                        Market cap Change(24hr) :{category.market_cap_change_24h}
                                    </div>

                                    <div style={{ padding: "20px 20px 20px 0px", fontSize: "20px" }}>
                                        Volume (24hr):{category.volume_24h}
                                    </div>

                                    {category.content && <div style={{ padding: "20px 20px 20px 0px", fontSize: "16px" }}>About : {category.content}</div>}
                                </div>

                                <div style={{ marginTop: "30px" }} >

                                    <div style={{ fontWeight: "lighter", textDecoration: "1px underline", fontSize: "30px", paddingBottom: "20px" }}>Top 3 Coins</div>

                                    <div style={{ display: "flex" }}>

                                        {category.top_3_coins.map((coin, index) => {

                                            return (
                                                <div style={{ padding: "20px" }}><img src={coin} /></div>
                                            )

                                        })}
                                    </div>

                                </div>
                            </div>


                        </div>}

                    </div>



                </div>
            </div>


        </>
    )



}