import { fontSize } from "@mui/system";



export default function Data({coin,priceUSD,color}) {



    return (
        <>

            <tr style={{backgroundColor:`${color}`}}>
                <td style={{ padding: "20px 0px 20px 10px",fontSize:"20px" }}>{coin}</td>
                <td >{priceUSD}</td>
        
                <td >{priceUSD*82}</td>
            </tr>

        </>
    )
}