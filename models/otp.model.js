import mongoose from "mongoose";

const otpSchema = mongoose.Schema(
  {
    otp: { type: String },
    email: { type: String },
    createdAt: {
      type: Date,
      default: Date.now,
      index: { expires: "1m" },
    },
  },
  {
    timestamps: true,
  }
);

const Otp = mongoose.model("Otp", otpSchema);

export default Otp;
