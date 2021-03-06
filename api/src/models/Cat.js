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
            type: DataTypes.STRING,  
       },
       img:{
           type: DataTypes.STRING,
            allowNull: false
       },
       address:{
            type: DataTypes.TEXT,
            allowNull: false
       },
       phone_number:{
           type: DataTypes.STRING,
       },
       isAdopted:{
           type: DataTypes.BOOLEAN,
           defaultValue: false
       }




    },{timestamps:false})





}