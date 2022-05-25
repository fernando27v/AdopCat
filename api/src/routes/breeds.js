const {Router} = require("express");
const {getBreeds} = require("../controllers/breeds/getBreeds");

const breedsRouter = Router();

breedsRouter.get("/", getBreeds)