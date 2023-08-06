const express = require("express");
const feedController = require("../controller/feed");
const { body } = require("express-validator");
const isAuth = require("../middleware/auth");
const router = express.Router();

router.get("/posts", isAuth, feedController.getPosts);
router.post(
  "/post",
  isAuth,
  [
    body("title").trim().isLength({ min: 7 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.createPost
);
router.get("/post/:postId", isAuth, feedController.getPost);
router.put(
  "/post/:postId",
  isAuth,
  [
    body("title").trim().isLength({ min: 7 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.updatePost
);
router.delete("/post/:postId", isAuth, feedController.deletePost);
module.exports = router;
