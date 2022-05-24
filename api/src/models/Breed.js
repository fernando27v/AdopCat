const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {

    sequelize.define("Breed",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        img:{
            type: DataTypes.STRING,
        }

    },{timestamps:false})

}