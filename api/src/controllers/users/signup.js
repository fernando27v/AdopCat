const {User} = require("../../db.js");
const bcrypt = require('bcryptjs');

module.exports = {
  signup: async (req, res) => {
    var {
      name,
      lastName,
      date_of_birth,
      email,
      password,
      favorite_movie,
      mother_first_name,
    } = req.body;

    email = email.toLowerCase();
    favorite_movie = favorite_movie.toLowerCase();
    mother_first_name = mother_first_name.toLowerCase();

    try{

    const user = await User.findOne({ where: { email } });

    if (user) {
      throw new Error("Email already exists");
    }
    password = bcrypt.hashSync(password, 10);

  
      const userCreated = await User.create({
        name,
        lastName,
        date_of_birth,
        email,
        favorite_movie,
        mother_first_name,
        password,
      });

      res.status(200).json({
        success: true,
        message: "User created successfully",
      });
    } catch (err) {
     return res.status(500).json({
        success: false,
        message: err.message
      });
    }
  },
};