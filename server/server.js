import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './configs/db.js';
import userRouter from './routes/userRoute.js';
import dotenv from 'dotenv';
import sellerRouter from './routes/sellerRoute.js';
import connectCloudinary from './configs/cloudinary.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
connectDB();
await connectCloudinary();

// Allow multiple Origins
const allowedOrigin = ['http://localhost:5173/'];

// Middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigin, credentials: true}));


// Routes
app.use("/api/user", userRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    
})