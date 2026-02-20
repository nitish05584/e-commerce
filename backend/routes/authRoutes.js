const express = require('express');
const { registration, login, logout, googleLogin } = require('../controller/authController');


const authRouter = express.Router();


authRouter.post('/registration',registration);

authRouter.post('/login',login);

authRouter.get('/logout',logout);

authRouter.post("/googlelogin",googleLogin)



module.exports = authRouter;