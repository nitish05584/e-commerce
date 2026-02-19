const express = require('express');

const cors = require('cors');

const color = require('colors');

const dotenv = require('dotenv');

const cookieParser = require('cookie-parser');

const connectDB = require('./config/db');

const authRouter = require('./routes/authRoutes');






const app = express();

dotenv.config();

connectDB();






app.use(express.json());

app.use(cookieParser());

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));





app.use('/api/auth',authRouter)






const port = process.env.port || 8080;


app.listen(port, () => {
    console.log(`Server is running on ${port}`.bgMagenta);
});