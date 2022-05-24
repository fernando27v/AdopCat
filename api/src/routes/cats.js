const {Router} = require("express");

const catsRouter = Router();

catsRouter.get("/", (req,res)=>{res.send("cats")})

module.exports = catsRouter;