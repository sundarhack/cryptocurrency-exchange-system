import Link from "next/link";




export default function Header() {


    return (
        <div className="bg-black text-white">
            <div className="flex justify-between p-1" style={{ alignItems: "center" }}>

                <div className="flex" style={{ alignItems: "center" }}>
                    <div id="logo" className="mx-2.5 my-5">
                        <img src="./colorLogo.svg" width="130px" height="50px" />
                    </div>

                    {/*Items in header*/}
                    <div className="flex" style={{alignItems:'center',marginTop:"-20px"}}>
                        <div className="mx-2.5 mt-5">
                            <Link href={"/home"}> Buy Crypto</Link>
                        </div>

                        <div className="mx-2.5 mt-5">
                        <Link href={"/market"}> Market </Link>
                        </div >

                        <div className="mx-2.5 mt-5" >
                            <Link href={"/home"}> Trade </Link>
                        </div>

                        <div className="mx-2.5 mt-5" >
                            Staking
                        </div>

                        <div className="mx-2.5 mt-5">
                            <Link href={"/home/learn"}> Learn </Link>
                        </div >

                        <div className="mx-2.5 mt-5">
                            <Link href={"/trending"}> Trending </Link>
                        </div >

                        <div className="mx-2.5 mt-5">
                            <Link href={"/market/statistics"}> Statistics </Link>
                        </div >
                    </div>


                </div>

                <div id="auth" className="flex">

                    {/*Authenticaton Button*/}
                    <div className="mx-2.5 mt-5">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                            <Link href="/login"> Login</Link>
                        </button>
                    </div >
                    <div className="mx-2.5 mt-5">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                            <Link href="/signup"> SignIn</Link>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

