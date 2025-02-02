import express from "express";
import {
  addProperties,
  bankUserRegister,
  getProperties,
  login,
  logout,
  topAuctioners,
  verifyOTP,
} from "../controllers/bankUserController.js";
import bankUserAuth from "../middlewares/bankUser.js";

const bankUserRouter = express.Router();

bankUserRouter.post("/register", bankUserRegister);
bankUserRouter.post("/otp-verification", verifyOTP);
bankUserRouter.post("login", login);
bankUserRouter.get("/logout",bankUserAuth, logout);
bankUserRouter.post("/add-property", bankUserAuth, addProperties)
bankUserRouter.get("/get-property", bankUserAuth, getProperties)
bankUserRouter.get("/top-auctioners",bankUserAuth, topAuctioners)

export default bankUserRouter;
