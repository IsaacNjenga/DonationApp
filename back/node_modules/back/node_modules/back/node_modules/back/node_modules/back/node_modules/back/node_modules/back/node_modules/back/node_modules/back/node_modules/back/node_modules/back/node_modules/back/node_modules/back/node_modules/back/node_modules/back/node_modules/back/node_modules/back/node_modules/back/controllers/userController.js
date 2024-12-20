import UserModel from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const Register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ error: [{ msg: "User already exists under this email" }] });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new UserModel({ username, email, password: hashPassword });
    const result = await newUser.save();
    result._doc.password = undefined;
    return res.status(201).json({ success: true, ...result._doc });
  } catch (error) {
    console.error("Error during sign up:", error);
    return res.status(500).json({ error: error.message });
  }
};

const Login = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExists = await UserModel.findOne({ email });
    if (!userExists) {
      return res
        .status(400)
        .json({ error: [{ msg: "This email is not registered" }] });
    }
    const isPasswordOk = await bcrypt.compare(password, userExists.password);
    if (!isPasswordOk) {
      return res.status(400).json({
        error: [{ msg: "Password is incorrect!" }],
      });
    }
    const token = jwt.sign(
      { _id: userExists._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    const user = { ...userExists._doc, password: undefined, username };
    return res.status(201).json({ success: true, user, token });
  } catch (error) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

const Auth = async (req, res) => {
  return res.status(201).json({ success: true, user: { ...req.user._doc } });
};

export { Register, Login, Auth };
