const express=require("express");
const isAuth = require("../middleware/isAuth");
const { placeOrder, userOrders } = require("../controller/orderController");

const orderRoutes=express.Router();


orderRoutes.post("/placeorder",isAuth,placeOrder);

orderRoutes.post("/userorders",isAuth,userOrders)


module.exports=orderRoutes;