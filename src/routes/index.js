const { ROUTES } = require("../utils/constants");
const authRouter = require("./auth");
const userRouter = require("./user");
const postRouter = require("./post");
const conversationRouter = require("./conversation");
const messageRouter = require("./message");


const {HEALTHCHECK, AUTH, USER, POST, CONVERSATION, MESSAGE} = ROUTES

/**
 * 
 * @param app app is an express function
 */ 
function routes(app) {
    app.get(HEALTHCHECK, (req, res)=> {res.send("OK")});
    app.use(AUTH, authRouter);
    app.use(USER, userRouter);
    app.use(POST, postRouter);
    app.use(CONVERSATION, conversationRouter);
    app.use(MESSAGE, messageRouter);
}

module.exports = routes;