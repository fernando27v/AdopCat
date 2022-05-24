const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {

    sequelize.define("Cat",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
       description:{
           type: DataTypes.TEXT,
           allowNull: false
       },
       age:{
            type: DataTypes.INTEGER,  
       },
       img:{
           type: DataTypes.STRING,
       },
       address:{
            type: DataTypes.TEXT,
       }




    },{timestamps:false})





}