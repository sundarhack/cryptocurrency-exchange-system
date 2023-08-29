import Link from "next/link"
import { useRef, useState } from "react";
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";

import Router from "next/router";
import Image from "next/image";
import loginImage from "../../public/login.png"
export default function Login() {

    const [invalidUser, setInvalidUser] = useState(false);
    let email = useRef<HTMLInputElement>(null);
    let password = useRef<HTMLInputElement>(null);

    async function loginHandler(e: any) {
        e.preventDefault();

        if (email.current && password.current) {

            const res = await axios.post("/api/auth/login", {
                email: email.current.value,
                password: password.current.value
            })

            console.log(res.data)
            if (res.data.flag == false) {
                console.log("Invalid user")
                setInvalidUser(true)
                return
            }

            setCookie("token", res.data.token, {
                path: "/",
                sameSite: true
            });

            Router.push("/home")

        }
        else {
            alert('Enter details')
        }
    }

    return (
        <div>
          
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div style={{ width: "50%", padding: "300px 0px 0px 400px" }}>
                    <Image alt="login" src={loginImage} width={400} height={300} />
                </div>
                <div style={{ width: "1000px", marginRight: "100px", paddingRight: "400px" }}>
                    <section className="bg-gray-50 dark:bg-gray-900" style={{ width: "700px" }}>
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    {invalidUser &&     <div style={{ color: "white", textAlign: "center",fontSize:"30px",padding:"30px" }}>Invalid User</div>}
                            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/> */}
                                Krypto
                            </a>
                            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Log in to your account
                                    </h1>
                                    <form className="space-y-4 md:space-y-6" onSubmit={loginHandler}>
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                            <input ref={email} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input ref={password} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                                                </div>
                                            </div>
                                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                        </div>
                                        <button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in</button>
                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                            Dont have account yet?<Link href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>

            </div>


   
        </div>
    )

}

