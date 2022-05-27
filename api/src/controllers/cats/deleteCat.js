const {Cat} = require("../../db.js");

module.exports = {
    deleteCat: async (req, res) => {
        const {id,UserId} = req.body;
        try{
        const cat = await Cat.findOne({where:{id,UserId}});
        if(cat){
            await Cat.destroy({where:{id}});
            res.status(200).json({success:true,message:"Cat deleted"});
        }else{
            throw new Error("Cat not found or you can't delete it");
        }
        }catch(err){
            res.status(500).json({success:false,message:err})
        }
        
    } 
}