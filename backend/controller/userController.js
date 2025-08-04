import userModel from "../models/userModel.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
dotenv.config();
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all the fields" });
    }
    const findUser = await userModel.findOne({ email });
    if (!findUser) {
      return res
        .status(400)
        .json({ success: false, message: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(findUser._id);
    } else {
      res.json({ success: false, message: "Incorrect password" });
    }
    // res.status(201).json({ success: true, message: "Login successful" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all the fields" });
    }
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter a valid email" });
    }
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }
    const hashed = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      name,
      email,
      password: hashed,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({
      success: true,
      token,
      // message: "User registered successfully",
      // user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt
        .sign(
          { email+password} { process.env.JWT_SECRET }{ expiresIn: "1d" }
 )
      return res.json({ success: true, token });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
export { loginUser, registerUser, adminLogin };
