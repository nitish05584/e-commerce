const express = require('express');
const { registration, login, logout } = require('../controller/authController');


const authRouter = express.Router();


authRouter.post('/registration',registration);

authRouter.post('/login',login);

authRouter.get('/logout',logout);



module.exports = authRouter;