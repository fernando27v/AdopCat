const {Router} = require("express");
const usersRouter = require("./users")
const catsRouter = require("./cats")
const breedsRouter = require("./breeds")

const routes = Router();

routes.use("/user",usersRouter)
routes.use("/cats",catsRouter)
routes.use("/breeds",breedsRouter)

module.exports = routes