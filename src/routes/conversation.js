
const { Router } = require("express");
const { getAllConversationsController } = require("../controller/conversation.controller");
const { decodeToken } = require("../middleware/user.middleware");
const { ROUTES } = require("../utils/constants");


const router = Router();
const { INDEX } = ROUTES;

router.get(INDEX, decodeToken, getAllConversationsController);

module.exports = router;
