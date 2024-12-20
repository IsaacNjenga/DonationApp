import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String },
    email: { type: String },
    //role: { type: String },
    password: { type: String },
  },
  { collection: "user", timestamps: true }
);

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
