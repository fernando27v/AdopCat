const { DataTypes } = require("sequelize");
// Export de modelo
module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      lastName:{
        type: DataTypes.STRING,
      },
      date_of_birth:{
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      favorite_movie:{
          type: DataTypes.STRING,
          allowNull: false,
      },
      mother_first_name:{
            type: DataTypes.STRING,
            allowNull: false,
      }
    
    },
    { timestamps: false }
  );
};