import mongoose from "mongoose";




const connectDB = async () => {
  try {
    
    await mongoose.connect(
      "mongodb+srv://rahulgudu2003:rahulgudu2003@cluster1.jf1eva8.mongodb.net/",
      {
        dbName: "BlogIt",
      }
    );

    console.log("Connected to DB");
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
};

export default connectDB;
