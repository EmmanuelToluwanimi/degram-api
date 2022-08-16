
const { Router } = require("express");
const { getAllConversationsController, getSingleConversationController } = require("../controller/conversation.controller");
const { decodeToken } = require("../middleware/user.middleware");
const { ROUTES } = require("../utils/constants");


const router = Router();
const { INDEX, ID } = ROUTES;

router.get(INDEX, decodeToken, getAllConversationsController);
router.get(ID, decodeToken, getSingleConversationController);


module.exports = router;
