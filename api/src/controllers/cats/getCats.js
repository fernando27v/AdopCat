const {Cat,User,Breed} = require("../../db.js");


module.exports = {

    getCats: async (req, res) => {
        
      try{
          const cats = await Cat.findAll({  attributes: { exclude: ['BreedId'] },include: [{model:Breed},{model:User}]});

        res.status(200).json({success:true,message:cats})
      }catch(err){
          res.status(500).json({success:false,message:err})
      }
        
    }

}