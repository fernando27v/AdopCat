const {User} = require("../../db.js");
const bcrypt = require('bcryptjs');

module.exports = {

    resetPassword: async (req, res) => {

            var {email,favorite_movie,mother_first_name,password} = req.body;
      
        const user = await User.findOne({where:{email,favorite_movie,mother_first_name}})
        
        if(user){
            password = bcrypt.hashSync(password,10);
              await user.update({password},{where:{email}})
              return  res.status(200).json({success:true,message:"Password updated successfully"})
        }else{
          return  res.status(404).json({success:false,message:"Email or answers incorrect"})
        }

        

    }

}