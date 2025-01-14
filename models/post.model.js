import mongoose from "mongoose";
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    content: {
      type: String,
      required: [true, "Please add a content"],
    },
    thumnail: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "published"],
      default: "pending",
    },
    tags: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    views: {
      type: Number,
      default: 0,
    },
    isDraft: {
      type: Boolean
    }
  },
  {
    timestamps: true,
  }
);
const Post = mongoose.model("Post", postSchema);
export default Post;
