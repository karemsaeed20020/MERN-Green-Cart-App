import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './configs/db.js';
import userRouter from './routes/userRoute.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Allow multiple Origins
const allowedOrigin = ['http://localhost:5173/'];

// Middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigin, credentials: true}));


connectDB();
// Routes
app.use("/api/user", userRouter)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    
})