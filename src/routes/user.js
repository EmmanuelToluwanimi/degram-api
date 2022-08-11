const { Router } = require("express");
const {
  getUserInfoController,
  followController,
  getAllFollowersController,
  getAllFollowingController,
  unfollowController,
} = require("../controller/user.controller");
const { decodeToken } = require("../middleware/user.middleware");
const { ROUTES } = require("../utils/constants");


const router = Router();
const { FOLLOW, GET_FOLLOWERS, GET_FOLLOWING, UNFOLLOW, ID } = ROUTES;

router.get(FOLLOW, decodeToken, followController);
router.get(UNFOLLOW, decodeToken, unfollowController);
router.get(GET_FOLLOWERS, decodeToken, getAllFollowersController);
router.get(GET_FOLLOWING, decodeToken, getAllFollowingController);
router.get(ID, decodeToken, getUserInfoController);

module.exports = router;
