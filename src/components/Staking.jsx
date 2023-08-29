

// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Staking() {
    return (
        <div style={{marginTop:"30px"}}>
            <div style={{color:"white",textAlign:"center",fontSize:"50px",padding:"50px 0px 50px",fontWeight:"bolder"}}>Staking</div>
            <div style={{ padding: "10px 100px 100px 300px", display: "flex",flexWrap:"wrap" }}>

                <StakingCards image={"./cosmos.png"} name="Cosmos" reward={"3-6%"}></StakingCards>
                <StakingCards  image={"./tron.png"} name="tron" reward={"1-2%"} ></StakingCards>
                <StakingCards image={"./tezos.png"} name="Tezos" reward={"2-6%"}></StakingCards>
                <StakingCards image={"./ethereum.png"} name="Ethereum" reward={"6-8%"}> </StakingCards>
            </div>
        </div>

    )
}


function StakingCards({image,name,reward}) {


    return (
        <div style={{ width: "300px", color: "black", marginRight: "30px", backgroundColor: "white", textAlign: "center" }}>
            <div style={{ padding: "30px" }}>
                <div><img src={image} /></div>
                <div style={{fontSize:"30px"}}>{name}</div>
                <div style={{fontSize:"20px"}}>{reward}</div>
            </div>


        </div>
    )


}