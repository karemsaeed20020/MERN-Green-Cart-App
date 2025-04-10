import mongoose from "mongoose";

const connectDB = async () => {
    return await mongoose.connect(process.env.MONGODB_URI).then((result) => {
        console.log("Connected to MongoDB");
    }).catch((error) => {
        console.log("Error connecting to mongoDB: ", error);
    })
}

export default connectDB;