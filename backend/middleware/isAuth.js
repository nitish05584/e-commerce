

const jwt=require("jsonwebtoken")

const isAuth=async(req,res,next)=>{
    try {
        let {token}=req.cookies

        if(!token){
           return res.status(400).json({message:"user does not have a token"}) 
        }
        let verifyToken=jwt.verify(token,process.env.JWT_SECRET)
        if(!verifyToken){
         return res.status(400).json({message:"user does not have a token"})    
        }
        req.userId=verifyToken.userId
        next()
    } catch (error) {
      console.error("isAuth error");
    return res.status(500).json({ message: "is auth error" });  
    }
}

module.exports=isAuth