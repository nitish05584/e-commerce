const User = require("../model/userModel");


const addToCart = async (req, res) => {
    try {
        const {itemId,size}=req.body;

        const userData=await User.findById(req.userId);

        if(!userData){
            return res.status(404).json({message:"User Not Found"})
        }
        let cartData=userData.cartData ||{};

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] +=1;
            }else{
                cartData[itemId][size]=1;
            }
        }else{
            cartData[itemId]={};
            cartData[itemId][size]=1;
        }
        await User.findByIdAndUpdate(req.userId,{cartData})

       return res.status(200).json({message:"Item added to cart successfully",cartData})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
}

const UpdateCart= async (req, res) => {
    try {
        const {itemId,size,quantity}=req.body;
        
        const userData=await User.findById(req.userId);
        let cartData=await userData.cartData 

        cartData[itemId][size]=quantity;

        await User.findByIdAndUpdate(req.userId,{cartData})

        return res.status(200).json({message:"Cart updated successfully",cartData})

        
    } catch (error) {
      console.log(error) 
      return  res.status(500).json({message:"Internal Server Error"})  
    }
}

const getUserCart= async (req, res) => {
    try {
        const userData=await User.findById(req.userId);
        let cartData=await userData.cartData 

        return res.status(200).json({message:"Cart data fetched successfully",cartData})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal cart error"});
    }
}

module.exports={
    addToCart,UpdateCart,getUserCart
}