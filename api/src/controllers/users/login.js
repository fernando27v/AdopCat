const {User,Cat} = require("../../db.js");
const bcrypt = require('bcryptjs');

module.exports = {

login : async (req,res)=>{


    const {email,password} = req.body;
    try{
    const login = await User.findOne({where:{email},attributes:['password']})

   if(!login){
    return res.status(404).json({success:false,message:"Email dont exist"})
   }

        bcrypt.compare(password,login.password,async (err,result)=>{
            if(result === true){
              const user =   await User.findOne({where:{email},attributes:['id','name','email','lastName','date_of_birth'],include:[{model:Cat}]})
                res.status(200).json({
                success:true,
                message:user
                 }) 
            }else{
                return res.status(404).json({success:false,message:"Password dont match"})
            }
        })
  
    }catch(err){
        return res.status(500).json({
            success:false,
            error:err.message
        })
    }
   

    }

   


}

