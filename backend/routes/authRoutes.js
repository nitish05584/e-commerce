const express = require('express');
const { registration, login, logout, googleLogin, adminLogin } = require('../controller/authController');


const authRouter = express.Router();


authRouter.post('/registration',registration);

authRouter.post('/login',login);

authRouter.get('/logout',logout);

authRouter.post("/googlelogin",googleLogin)

authRouter.post("/adminlogin",adminLogin)



module.exports = authRouter;