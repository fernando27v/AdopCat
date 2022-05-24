const {Router} = require("express");
const usersRouter = require("./users")
const catsRouter = require("./cats")

const routes = Router();

routes.use("/user",usersRouter)
routes.use("/cats",catsRouter)

module.exports = routes