import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  email: {
    type: String,
    required: [true, "Please add a email"],
    unique: true,
  },
  password: {
    type: String,
  },
  phoneNo: {
    type: String,
  },
  profileImg: {
    type: String,
  },
  role: {
    type: String,
    default: ["user", "admin"],
  },
  interestedDomains: [{ type: String }],
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
