import express from "express";
import {
  followUser,
  getAllUser,
  getFriends,
  login,
  signUp,
  unFollowUser,
} from "../controllers/userController";
import { protect } from "../middleware/authMiddleWare.js";
const router = express.Router();
router.get("/", protect, getAllUser);
router.post("/signup", signUp);
router.post("/login", login);
router.get("/friends/:userId", protect, getFriends);
router.put("/:id/follow", protect, followUser);
router.put("/:id/unfollow", protect, unFollowUser);
export default router;
