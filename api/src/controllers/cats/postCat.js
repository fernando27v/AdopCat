const {Cat} = require("../../db.js");


module.exports = {

    postCat: async (req, res) => {
        const {name,age,img,address,description,phone_number,BreedId,UserId} = req.body;
        try{
        await Cat.create({
        name,
        age,
        img,
        address,
        description,
        phone_number,
        BreedId,
        UserId
       })

        res.status(200).json({success:true,message:"Cat created"})

        }catch(err){
            res.status(500).json({success:false,message:err})
        }
        
    }

}