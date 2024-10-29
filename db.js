import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "BlogIt",
    });
    console.log("Connected To DB");
  } catch (error) {
    console.log("Error connecting to DB: ", error);
  }
};

export default connectDB;
