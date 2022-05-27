const {Cat} = require("../../db.js");


module.exports = {

    isAdopted: async (req, res) => {
        const {id} = req.params;
        try{
        
            const cat =  await Cat.findByPk(id)
            if(!cat){
                throw new Error("Cat not found")
            }

         cat.isAdopted = !cat.isAdopted
        await cat.save()
     

        res.status(200).json({success:true,message:"Status changed"})

        }catch(err){
            res.status(500).json({success:false,message:err})
        }
    }

}