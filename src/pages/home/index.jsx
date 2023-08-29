import Header from "@/components/Beginner/Header";
import Trade from "@/components/Beginner/Trade.jsx";
import cookie from 'cookie';
import jwt from "jsonwebtoken";

import React, { useEffect } from "react";





const Beginner= (props)=> {

    useEffect(()=>{
        {console.log(props)}
    },[])


    return (
        <div style={{ height: "100%" }}>
            <Header></Header>
            <div style={{ backgroundColor: "#", height: "100%" }}>
                <Trade ></Trade>
            </div>
        </div>
    )
}

export default Beginner;

export function getServerSideProps(cont) {

    if (!cont.req.headers.cookie) {
        return {
            redirect: {
                destination: "/login"
            }
        }

    }

    console.log(cont.req.headers.cookie)
    const { token } = cookie.parse(cont.req.headers.cookie);

    try {
        const decoded = jwt.verify(token, 'gnhjkslfvnrjdf') ;

        console.log(decoded)

        const prop = {
            email:decoded.email,
            time:decoded.iat
        }

        return {
            props:prop
        }
    }
    catch (e) {

        return {
            redirect: {
                destination: "/login"
            }
        }

    }




}
