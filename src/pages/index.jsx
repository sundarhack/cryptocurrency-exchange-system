import Header from '@/components/Header'
import Image from 'next/image'
import pic from "../../public/bg.jpeg"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WHY from "@/components/WHY.jsx"
import Staking from "@/components/Staking.jsx"
import { Button } from '@mui/material'
import homeImage from "../../public/ll.png"
import Link from 'next/link';
import { useState } from 'react';



export default function Home() {

  const [showNews,setNews] = useState(false);

  function newsletter(){

    setNews(true);

  }



  return (

    <>

      <div>
        <Header></Header>
        <div>
          {/* <Image style={{ width: "100%", height: "800px" }} src={pic} alt='logo' />
           */}
          <div style={{ color: "white", display: "flex", justifyContent: "space-around", backgroundColor: "#1f2937", margin: "30px", fontWeight: "bold" }}>
            <div style={{ padding: "40px" }}>
              <div style={{ paddingTop: "80px" }}>
                <div style={{ fontSize: "100px", color: "#d269d0" }}>Krypton</div>
                <div style={{ fontSize: "50px" }}>Trade with Confidence</div>
                <div style={{ padding: "30px 0px 0px 0px" }}>One stop to Exchange Crypto-currency and Learn!</div>
              </div>


            {/*Authenticaton Button*/}
              <div id="auth" className="flex">

               
                <div className="mx-2.5 mt-5">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" style={{width:"130px",height:"50px",borderRadius:"30px"}}>
                    <Link href="/login"> Login</Link>
                  </button>
                </div >
                <div className="mx-2.5 mt-5">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" style={{width:"130px",height:"50px",borderRadius:"30px"}}>
                    <Link href="/signup"> SignIn</Link>
                  </button>
                </div>
              </div>
            </div>

            <div style={{ marginLeft: "100px" }}>
              <Image src={homeImage} width={600} height={50} />
            </div>
          </div>
        </div>

        {/* WHy choose us */}
        <WHY></WHY>

           <Staking></Staking>


           {/* NewsLetter */}
        <div>
          <div className="mt-20 text-white">
            <center> <p style={{ fontSize: 20, marginBottom: 40 }}><span className="font-bold text-white" style={{ fontSize: 24 }}>Subscribe</span> to our Newsletter and become a part of a rapidly growing trading community</p></center>
            <center> <div style={{ backgroundColor: "white", height: 70, width: 800, display: "flex", alignItems: "center", borderRadius: 10, border: "solid 1px #D9E0E6", marginTop: 25, padding: 30 }}>
              <form>
                <input type='text' style={{ height: 40, width: 600, marginRight: 55, flex: 0.9, border: 0, outline: 0, color: "black" }} />
                <Button onClick={newsletter} variant="contained" style={{ backgroundColor: '#1f2937', marginRight: -30 }}>Submit</Button>
              </form>
            </div></center>
          {showNews &&   <div style={{color:"white",textAlign:"center",paddingTop:"30px",fontSize:"30px"}}>Successfully Subscribed</div>}
          </div>

          <div className="p-20"></div>

       
        </div>



          {/* {About Us} */}
        <div>
          <div className="h-80 bg-[#1f2937] relative">
            <img src="./colorLogo.svg" style={{ height: 90, marginLeft: 70, marginTop: 50, position: 'absolute' }} />
            <div className=" flex flex-row text-[#FFFFFF] absolute mt-16 right-72">


              <div className="mx-40" style={{ borderRight: "solid 1" }}>
                <ul>
                  <li className="p-1">Trade</li>
                  <li className="p-1">Learn</li>
                  <li className="p-1">Market</li>
                  <li className="p-1">About us</li>
                  <li className="p-1">Community</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="p-1">Staking</li>
                  <li className="p-1">Help Center</li>
                  <li className="p-1">Terms and Condition</li>
                  <li className="p-1">Fees</li>
                </ul>

              </div>
            </div>
            <div className=" flex absolute bottom-8 right-12">
              <div className="mx-3"> <InstagramIcon style={{ color: 'white' }} /></div>

              <div className="mx-3"> <FacebookIcon style={{ color: 'white' }} /></div>
              <div className="mx-3"> <TwitterIcon style={{ color: 'white' }} /></div>
            </div>



          </div>
        </div>

      </div >
    </>
  )
}
