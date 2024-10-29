import dotenv from "dotenv";
import connectDB from "./db.js";
dotenv.config();
connectDB()
import User from "./models/user.model.js";
export { connectDB, User };
