import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRouter.js";
import connectDB from "./db/index.js";
import passport from "passport"; ////////////////
import {
  googleAuth,
  googleAuthCallback,
} from "./controllers/userController.js";
import bankUserRouter from "./routes/bankUserRouter.js";
import connectCloudinary from "./config/cloudinary.js";

const app = express();

// middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// DB connection
connectDB();
connectCloudinary()

// Initialize passport
app.use(passport.initialize());

// Google OAuth routes
app.get("/auth/google", googleAuth);
app.get("/auth/google/callback", googleAuthCallback);

// api endpoints
app.use("/api/v1/user", userRouter);
app.use("/api/v1/bank-user", bankUserRouter);


export { app };
