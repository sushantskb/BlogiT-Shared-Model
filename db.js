import mongoose from "mongoose";




const connectDB = async () => {
  try {
    
    await mongoose.connect(
      "mongodb+srv://blogitadminskb_db_user:blogit2026@cluster.wgwksjw.mongodb.net/",
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
