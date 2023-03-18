import express from "express";
import {
  addBlog,
  deleteBlogById,
  getAllBlogs,
  getBlogById,
  getTimeLinePosts,
  getUserById,
  likeDislikePost,
  updateBlog,
} from "../controllers/blogController";
import { protect } from "../middleware/authMiddleWare.js";
const blogRouter = express.Router();
blogRouter.get("/", protect, getAllBlogs);
blogRouter.post("/add", protect, addBlog);
blogRouter.put("/update/:id", protect, updateBlog);
blogRouter.get("/:id", protect, getBlogById);
blogRouter.delete("/:id", protect, deleteBlogById);
blogRouter.get("/user/:id", protect, getUserById);
blogRouter.put("/:id/like", protect, likeDislikePost);
blogRouter.get("/timeline/:userId", protect, getTimeLinePosts);
export default blogRouter;
