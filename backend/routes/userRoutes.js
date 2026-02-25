const express = require('express');
const isAuth = require('../middleware/isAuth');
const getCurrentUser = require('../controller/userController');



const userRoutes = express.Router();

userRoutes.post("/getcurrentuser",isAuth,getCurrentUser)



module.exports = userRoutes;