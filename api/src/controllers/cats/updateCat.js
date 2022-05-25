const {Cat} = require("../../db.js");


module.exports = {

    updateCat: async (req, res) => {
        const {name,age,img,address,description,phone_number,BreedId} = req.body;
        try{
        await Cat.update({
        name,
        age,
        img,
        address,
        description,
        phone_number,
        BreedId,
       })

        res.status(200).json({success:true,message:"Cat updated"})
        }catch(err){
            res.status(500).json({success:false,message:err})
        }
       

        res.status(200).json({success:true,message:cats})
        
    }

}