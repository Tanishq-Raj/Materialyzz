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
userRouter.get("/logout",userAuth, logout);
userRouter.get("/get-properties", userAuth, getProperties)
userRouter.post("/send-otp", async (req, res) => {
  const { phone } = req.body;

  try {
    // Firebase generates an OTP and sends it to the user's phone
    const session = await auth.createSessionCookie(phone, { expiresIn: 60 * 5 * 1000});

    res.json({ success: true, message: "OTP sent successfully", session });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default userRouter;
