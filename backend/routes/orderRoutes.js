const express=require("express");
const isAuth = require("../middleware/isAuth");
const { placeOrder } = require("../controller/orderController");

const orderRoutes=express.Router();


orderRoutes.post("/placeorder",isAuth,placeOrder);


module.exports=orderRoutes;