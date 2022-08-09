const { Router } = require("express");
const {
  getUserInfoController,
  followController,
  getAllFollowersController,
  getAllFollowingController,
  unfollowController,
} = require("../controller/user.controller");
const { ROUTES } = require("../utils/constants");

const router = Router();
const { FOLLOW, GET_FOLLOWERS, GET_FOLLOWING, UNFOLLOW, ID } = ROUTES;

router.post(FOLLOW, followController);
router.post(UNFOLLOW, unfollowController);
router.get(GET_FOLLOWERS, getAllFollowersController);
router.get(GET_FOLLOWING, getAllFollowingController);
router.get(ID, getUserInfoController);

module.exports = router;
