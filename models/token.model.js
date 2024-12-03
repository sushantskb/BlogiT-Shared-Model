import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
  token: { type: String },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  expiresAt: Date,
});

const Token = mongoose.model("Token", tokenSchema);

export default Token;
