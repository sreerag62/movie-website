import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

console.log(process.env.MONGO_URI);

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};