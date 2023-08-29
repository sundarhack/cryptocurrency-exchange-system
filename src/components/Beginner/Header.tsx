import Link from "next/link";



export default function Header() {


    return (
        <>
            <div className="flex items-center justify-center bg-black text-white">
                <div className="mx-2.5 p-4"><Link href="/">Home</Link></div>
                <div className="mx-2.5 p-4"> <Link href={"/market"}>Market</Link></div>
                <div className="mx-2.5 p-4"><Link href="/home/learn">Learn</Link></div>
                <div className="mx-2.5 p-4"><Link href="/home">Trade</Link></div>
                <div className="mx-2.5 p-4"><Link href="/home/wallet">Wallet</Link></div>
                <div className="mx-2.5 p-4"> <Link href={"/trending"}>Trending</Link></div>
                <div className="mx-2.5 p-4"> <Link href={"/market/statistics"}>Statistics</Link></div>
                <div className="mx-2.5 p-4"> <Link href={"/home/categories"}>Categories</Link></div>
                <div className="absolute right-10"> <Link href={"/"}>Logout</Link></div>
       
            </div>
        </>

    )
}