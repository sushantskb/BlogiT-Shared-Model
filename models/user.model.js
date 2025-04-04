import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
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
    salt: {
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
      enum: ["user", "admin"],
      default: "user",
    },
    interestedDomains: [{ type: String }],
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAllowed: {
      type: Boolean,
      default: false,
    },
    savedPosts: [
      {
        postId: {
          type: String,
        },
      },
    ],
    draftedPosts: [
      {
        postId: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
