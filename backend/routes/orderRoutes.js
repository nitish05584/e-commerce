const express=require("express");
const isAuth = require("../middleware/isAuth");
const { placeOrder, userOrders, allOrders, updateStatus } = require("../controller/orderController");
const adminAuth = require("../middleware/adminAuth");

const orderRoutes=express.Router();


orderRoutes.post("/placeorder",isAuth,placeOrder);

orderRoutes.post("/userorders",isAuth,userOrders)

orderRoutes.post("/list",adminAuth,allOrders)

orderRoutes.post("/status",adminAuth,updateStatus)


module.exports=orderRoutes;