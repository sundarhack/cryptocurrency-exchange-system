import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
export default function Deposit(props) {


    let amount = useRef(0);

    const [deposited,setDeposit]=useState(false);
    const [error,setError] = useState(false);
  async function deposit(){
 
        const req  = await axios.post("/api/deposit",{
            amount:amount.current.value
        })

        if(req.data.flag == true){
            setDeposit(true)
        }
        else{
            setError(true);
        }

    }

    return (

        <div style={{ position: "absolute", zIndex: "3", color: "white", left: "40%", top: "30%", backgroundColor: "black", borderRadius: "20px" }}>

            <div style={{ textAlign: "right", padding: "10px" }}>
                <button onClick={() => {
                    props.close()
                }} type="button" className="ounded-md p-2 inline-flex items-center justify-center text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>

                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div style={{ padding: "0px 50px 50px 50px" }}>

                <div>
                    <div style={{ paddingBottom: "50px" }}>
                        Deposit INR


                    </div>

                    <div>
                        <input ref={amount} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amount" required />
                    </div>

                    <div className="text-left" style={{padding:"50px 0px 10px 0px"}}>
                        <button onClick={deposit} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            deposit
                        </button>
                    </div>
                </div>
            </div>


              {deposited &&   <div style={{textAlign:"center",position:"relative",top:"100px",fontSize:"30px"}}> Succesfully Deposited</div>}
              {error &&   <div style={{textAlign:"center",position:"relative",top:"100px",fontSize:"30px"}}> Error while depositing, please try again</div>}


        </div>
    )


}