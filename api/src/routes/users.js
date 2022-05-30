const {Router} = require("express")
const {login} = require("../controllers/users/login")
const {signup} = require("../controllers/users/signup")
const {resetPassword} = require("../controllers/users/resetPassword")
const {myCats} = require("../controllers/users/myCats")
const {} = require("../controllers/users/updateUser")
userRouter = Router();


userRouter.post("/login",login)
userRouter.post("/signup",signup)
userRouter.put("/password",resetPassword)
userRouter.get("/myCats",myCats)


module.exports= userRouter;