const { Router } = require("express");
const {
  createPostController,
  getAllPostsController,
  deletePostController,
  getSinglePostController,
  getAllUserPostsController
} = require("../controller/post.controller");
const { ROUTES } = require("../utils/constants");
const { decodeToken } = require("../middleware/user.middleware");
const {validatePostInput, validatePostQuery} = require("../middleware/post.middleware");

const router = Router();
const { INDEX, ID } = ROUTES;

/**
 * @idea: paginate or limit the number of posts to be returned
 * @idea: add a realtime search feature
 * @idea: add a sort feature
 * 
 */

router.get(INDEX, getAllPostsController);
router.post(INDEX, decodeToken, validatePostInput, createPostController);
router.delete(ID, decodeToken, validatePostQuery, deletePostController);
router.get(ID, decodeToken, validatePostQuery, getSinglePostController);
router.get(`${ID}/user`, decodeToken, validatePostQuery, getAllUserPostsController);

module.exports = router;
