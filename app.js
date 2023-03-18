import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes";
import blogRouter from "./routes/blogRoutes";
const app = express();
app.use(express.json());
dotenv.config();

app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running  on port ${PORT}`));
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err.message));
