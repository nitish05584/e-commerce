const express = require('express');

const cors = require('cors');

const color = require('colors');

const dotenv = require('dotenv');

const cookieParser = require('cookie-parser');

const connectDB = require('./config/db');

const authRouter = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');






const app = express();

dotenv.config();

connectDB();






app.use(express.json());

app.use(cookieParser());

app.use(cors({
    origin:["http://localhost:5173","http://localhost:5174"],
    credentials:true
}));





app.use('/api/auth',authRouter)

app.use('/api/user',userRoutes)





const port = process.env.port || 8080;


app.listen(port, () => {
    console.log(`Server is running on ${port}`.bgMagenta);
});