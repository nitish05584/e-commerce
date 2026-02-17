const User = require("../model/userModel");
const validator = require("validator");
const bcrypt = require("bcrypt");
const genToken = require("../config/token");

const registration = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    const token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({ 
      user 
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Register error" });
  }
};






const login =async(req,res)=>{
  try {
    let {email,password}=req.body;
    let user=await User.findOne({email})
    if(!user){
      return res.status(404).json({message:"User not found"})
    }
    let isMatch=await bcrypt.compare(password,user.password);

    if(!isMatch){
      return res.status(400).json({message:"Incorrect password"})
    }
     const token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({ 
      user 
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "login error" }); 
  }
}

const logout=async(req,res)=>{
  try {
    res.clearCookie("token")
    return res.status(201).json({ 
      message:"logout successfully" 
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "logout error" }); 
  }
}

module.exports = { registration ,login,logout};
