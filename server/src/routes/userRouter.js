import express from "express";
import {
  getProperties,
  login,
  logout,
  userRegister,
  verifyOTP,
} from "../controllers/userController.js";
import userAuth from "../middlewares/authUser.js";
import { auth } from "../config/firebase.js";

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/otp-verification", verifyOTP);
userRouter.post("login", login);
userRouter.get("/logout", userAuth, logout);
userRouter.get("/get-properties", userAuth, getProperties);

export default userRouter;
