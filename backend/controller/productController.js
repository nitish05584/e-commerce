const uploadOnCloudinary = require("../config/cloudinary");
const Product = require("../model/productModel");


const addProduct=async(req,res)=>{
    try {
        let {name,description,price,category,subCategory,sizes,bestseller}=req.body;

    let image1=await uploadOnCloudinary(req.files.image1[0].path)

    let image2=await uploadOnCloudinary(req.files.image2[0].path)

    let image3=await uploadOnCloudinary(req.files.image3[0].path)

    let image4=await uploadOnCloudinary(req.files.image4[0].path)

    let productData={
        name,
        description,
        price: Number(price),
        category,
        subCategory,
        sizes: JSON.parse(sizes),
        bestseller:bestseller==="true"?true:false,
        date: Date.now(),
        image1,
        image2,
        image3,
        image4
    }
      
    const product=await Product.create(productData)
    res.status(201).json({message:"Product added successfully",product})
        
    } catch (error) {
        res.status(500).json({message:"Error adding product",error})
    }
}


const listProduct=async(req,res)=>{
    try {
        const product=await Product.find({})
        res.status(200).json(product);
        
    } catch (error) {
        console.log("ListProduct error")
        res.status(500).json({message:"ListProduct  error",error})
    }
}

const removeProduct=async(req,res)=>{
    try {
       let {id}=req.params;
       const product=await Product.findByIdAndDelete(id);
       res.status(200).json({message:"Product removed successfully",product}) 
    } catch (error) {
        console.log("RemoveProduct error")
        res.status(500).json({message:"RemoveProduct  error",error})
    }
}


module.exports= {addProduct,listProduct,removeProduct}
