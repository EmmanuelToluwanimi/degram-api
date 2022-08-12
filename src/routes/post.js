const { Router } = require("express");
const {
  createPostController,
  getAllPostsController,
  deletePostController,
  getSinglePostController,
  getAllUserPostsController
} = require("../controller/post.controller");
const { ROUTES } = require("../utils/constants");

const router = Router();
const { INDEX, ID } = ROUTES;

router.get(INDEX, getAllPostsController);
router.post(INDEX, createPostController);
router.delete(ID, deletePostController);
router.get(ID, getSinglePostController);
router.get(`${ID}/user`, getAllUserPostsController);

module.exports = router;
