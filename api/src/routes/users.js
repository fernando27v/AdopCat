const {Router} = require("express")

userRouter = Router();

userRouter.post("/login")
userRouter.post("/signup")

module.exports= userRouter;