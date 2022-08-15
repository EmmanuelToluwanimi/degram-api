
const { Router } = require("express");
const { retrieveMessagesController, sendMessageController } = require("../controller/message.controller");
const { validateMessageInput } = require("../middleware/message.middleware");
const { validatePostQuery } = require("../middleware/post.middleware");
const { decodeToken } = require("../middleware/user.middleware");
const { ROUTES } = require("../utils/constants");


const router = Router();
const { INDEX, ID } = ROUTES;

router.get(ID, decodeToken, validatePostQuery, retrieveMessagesController);
router.post(INDEX, decodeToken, validateMessageInput, sendMessageController);

module.exports = router;
