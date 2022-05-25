const {Breed} = require("../../db.js");


module.exports = {

    getBreeds: async (req, res) => {
        
       const breeds = await Breed.findAll()

        res.status(200).json({success:true,message:breeds})
        
    }

}