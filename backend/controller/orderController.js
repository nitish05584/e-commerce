const Order=require('../model/orderModel');
const User=require('../model/userModel');
const razorpay=require('razorpay');
const currency='INR';

const getRazorpayInstance=()=>{
    if(!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET){
        return null;
    }
    return new razorpay({
        key_id:process.env.RAZORPAY_KEY_ID,
        key_secret:process.env.RAZORPAY_KEY_SECRET
    });
};

let razorpayInstance=getRazorpayInstance();

const placeOrder=async(req,res)=>{
    try {
        const {items,amount,address}=req.body;
        const userId=req.userId;
        
        if(!items || !amount || !address || !userId) {
            return res.status(400).json({message:"Missing required fields"})
        }

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
        console.log(error)
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



const allOrders=async(req,res)=>{
    try {
   const orders=await Order.find({})
   return res.status(200).json(orders)  

        
    } catch (error) {
      console.log(error)    
        return res.status(500).json({message:"admin fetching all orders error"})  
    }
}

const updateStatus=async(req,res)=>{
    try {
        const {orderId,status}=req.body;
        await Order.findByIdAndUpdate(orderId,{status})
        return res.status(200).json({message:"order status updated successfully"})
    } catch (error) {
        return res.status(500).json({message:"error updating order status"})
    }
}

const placeOrderRazorpay=async(req,res)=>{
    try {
        const {items,amount,address}=req.body;
        const userId=req.userId;

        if(!userId || !items || !items.length || !address){
            return res.status(400).json({message:"Missing required fields"});
        }

        const finalAmount=Number(amount);
        if(!Number.isFinite(finalAmount) || finalAmount<=0){
            return res.status(400).json({message:"Invalid amount"});
        }

        const razorpayInstance=getRazorpayInstance();
        if(!razorpayInstance){
            return res.status(500).json({message:"Razorpay is not configured on server"});
        }

        const orderData={
            items,
            amount:finalAmount,
            userId,
            address,
            paymentMethod:'Razorpay',
            payment:false,
            date:Date.now()
        };

        const newOrder=new Order(orderData);
        await newOrder.save();

        const options={
            amount:Math.round(finalAmount*100),
            currency,
            receipt:newOrder._id.toString()
        };

        const order=await razorpayInstance.orders.create(options);
        return res.status(200).json({
            ...order,
            key:process.env.RAZORPAY_KEY_ID
        });

    } catch (error) {
        console.log("placeOrderRazorpay error:", error);
        return res.status(500).json({message:error?.message || "order place by razorpay error"});
    }
}

 



module.exports={
    placeOrder,
    userOrders,
    allOrders,
    updateStatus,
    placeOrderRazorpay
}