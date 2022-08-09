const { Router } = require("express");
const {
  registerUserController,
  LoginUserController,
} = require("../controller/auth.controller");
const { ROUTES } = require("../utils/constants");

const router = Router();
const { LOGIN, REGISTER } = ROUTES;

router.post(REGISTER, registerUserController);
router.post(LOGIN, LoginUserController);

module.exports = router;
