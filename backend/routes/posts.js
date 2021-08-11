import express from "express";

import {
  getPosts,
  creatPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
const router = express.Router();

// http://localhost:5000/posts

router.get("/", getPosts);
router.post("/", creatPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/like", likePost);

export default router;
