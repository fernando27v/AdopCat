const {Router} = require("express");

const {getCats} = require("../controllers/cats/getCats");
const {deleteCat} = require("../controllers/cats/deleteCat");
const {isAdopted} = require("../controllers/cats/isAdopted");
const {postCat} = require("../controllers/cats/postCat");
const {updateCat} = require("../controllers/cats/updateCat");

const catsRouter = Router();

catsRouter.get("/", getCats)
catsRouter.delete("/",deleteCat)
catsRouter.post("/",postCat)
catsRouter.put("/",updateCat)
catsRouter.post("/adopted/:id",isAdopted)

module.exports = catsRouter;