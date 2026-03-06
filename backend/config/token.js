
const jwt = require("jsonwebtoken");


const genToken=async(userId)=>{
    try {
        let token=await jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"7d"});

        return token;

    } catch (error) {
      console.log(error)  
    }  
}



const genToken1=async(email)=>{
    try {
        let token=await jwt.sign({email},process.env.JWT_SECRET,{expiresIn:"7d"});

        return token;

    } catch (error) {
      console.log(error)  
    }  
}
module.exports={ genToken,genToken1};  
