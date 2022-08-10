const { Router } = require("express");
const {
  registerUserController,
  LoginUserController,
} = require("../controller/auth.controller");
const validateInput = require("../middleware/auth.middleware");
const { ROUTES } = require("../utils/constants");


const router = Router();
const { LOGIN, REGISTER } = ROUTES;

router.post(REGISTER, validateInput, registerUserController);
router.post(LOGIN, validateInput, LoginUserController);

module.exports = router;
