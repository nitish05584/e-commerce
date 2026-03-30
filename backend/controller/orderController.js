
const Order=require('../model/orderModel');
const User=require('../model/userModel');


const placeOrder=async(req,res)=>{
    try {
        const {items,amount,address}=req.body;
        const userId=req.userId;

        const orderData={
            items,
            amount,
            address,
            userId,
            paymentMethod:"COD",
            payment:false,
            date:Date.now()
        }
        const newOrder=new Order(orderData)
        await newOrder.save();
        await User.findByIdAndUpdate(userId,{cartData:{}}) 
        return res.status(200).json({message:"order placed successfully"})
    } catch (error) {
        return res.status(500).json({message:"order place error"})
    }
}




const userOrders=async(req,res)=>{
    try {
        const userId=req.userId;
        const orders=await Order.find({userId})
        return res.status(200).json(orders)
    } catch (error) {
        return res.status(500).json({message:"error fetching user orders"})
    }
}




module.exports={
    placeOrder,
    userOrders
}