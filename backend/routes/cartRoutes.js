const express=require("express");
const isAuth = require("../middleware/isAuth");
const { getUserCart, addToCart, UpdateCart } = require("../controller/cartController");

const cartRoutes=express.Router();

cartRoutes.post("/get",isAuth, getUserCart);

cartRoutes.post("/add",isAuth, addToCart);

cartRoutes.post("/update",isAuth, UpdateCart);




module.exports=cartRoutes;