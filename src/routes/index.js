const { ROUTES } = require("../utils/constants");
const authRouter = require("./auth");
const userRouter = require("./user");
const postRouter = require("./post");
const conversationRouter = require("./conversation");
const messageRouter = require("./message");


const {HEALTHCHECK, AUTH, USER, POST} = ROUTES

/**
 * 
 * @param app app is an express function
 */ 
function routes(app) {
    app.get(HEALTHCHECK, (req, res)=> {res.send("OK")});
    app.use(AUTH, authRouter);
    app.use(USER, userRouter);
    app.use(POST, postRouter);
    app.use(POST, conversationRouter);
    app.use(POST, messageRouter);
}

module.exports = routes;