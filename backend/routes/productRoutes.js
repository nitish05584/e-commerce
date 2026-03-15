const express = require('express');
const { addProduct, listProduct, removeProduct } = require('../controller/productController');
const upload = require('../middleware/multer');

const adminAuth = require('../middleware/adminAuth');


let productRoutes=express.Router();


productRoutes.post("/addproduct",upload.fields([{name: "image1", maxCount: 1}, {name: "image2", maxCount: 1}, {name: "image3", maxCount: 1}, {name: "image4", maxCount: 1}]), addProduct);

productRoutes.get("/list",listProduct)

productRoutes.post("/remove/:id",adminAuth,removeProduct)




module.exports=productRoutes;