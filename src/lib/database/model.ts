
import mongoose,{Document} from "mongoose";

const Schema = mongoose.Schema;


export interface CointType extends Document{
    email:String,
    BTC:Number,
    ETH:Number,
    INR:Number,
    USDT:Number,
    AVAX:Number
    
}

 const userSchema = new Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
})


const coinSchema = new Schema({
    email:String,
    BTC:Number,
    ETH:Number,
    INR:Number,
    USDT:Number,
    AVAX:Number
})


let User = mongoose.models.Users || mongoose.model("Users",userSchema);
let Coin = mongoose.models.Coin || mongoose.model("Coin",coinSchema);

export {Coin}
export default User;

