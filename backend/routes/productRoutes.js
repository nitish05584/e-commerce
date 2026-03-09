const express = require('express');
const { addProduct } = require('../controller/productController');
const upload = require('../middleware/multer');


let productRoutes=express.Router();


productRoutes.post("/addproduct",upload.fields([{name: "image1", maxCount: 1}, {name: "image2", maxCount: 1}, {name: "image3", maxCount: 1}, {name: "image4", maxCount: 1}]), addProduct);


module.exports=productRoutes;