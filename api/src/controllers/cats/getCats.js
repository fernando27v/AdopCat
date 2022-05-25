const {Cat,User,Breed} = require("../../db.js");


module.exports = {

    getCats: async (req, res) => {
        
       const cats = await Cat.findAll({  attributes: { exclude: ['BreedId'] },include: [{model:Breed}]});

        res.status(200).json({success:true,message:cats})
        
    }

}