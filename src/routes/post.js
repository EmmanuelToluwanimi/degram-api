const { Router } = require("express");
const {
  createPostController,
  getAllPostsController,
} = require("../controller/post.controller");
const { ROUTES } = require("../utils/constants");

const router = Router();
const { INDEX } = ROUTES;

router.post(INDEX, getAllPostsController);
router.post(INDEX, createPostController);

module.exports = router;
