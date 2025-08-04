import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
} from "../controller/userController.js";
const userRouter = express.Router();
userRouter.post("/signup", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
export default userRouter;
