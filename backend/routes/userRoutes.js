const express = require('express');
const isAuth = require('../middleware/isAuth');
const { getCurrentUser, getAdmin } = require('../controller/userController');

const adminAuth = require('../middleware/adminAuth');



 
const userRoutes = express.Router();

userRoutes.get("/getcurrentuser",isAuth,getCurrentUser)

userRoutes.get("/getadmin",adminAuth,getAdmin)



module.exports = userRoutes;