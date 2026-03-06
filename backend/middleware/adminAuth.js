const jwt=require('jsonwebtoken');
const adminAuth = async(req, res, next) => {
  try {
    let {token} = req.cookies

    if (!token) {
      return res.status(401).json({ message: "Not Authorized Login Again" });
    }

    let verifyToken = jwt.verify(token, process.env.JWT_SECRET);


    if (!verifyToken) {
      return res
        .status(401)
        .json({ message: "Not Authorized Login Again, invalid token" });
    }

    req.adminEmail = process.env.ADMIN_EMAIL;
    next();
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


module.exports=adminAuth;