const { User, Cat } = require("../../db.js");
const bcrypt = require("bcryptjs");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const login = await User.findOne({
        where: { email },
        attributes: ["password"],
      });

      if (!login) {
        throw new Error("Email not found");
      }

      bcrypt.compare(password, login.password, async (err, result) => {
        try {
          if (result === true) {
            const user = await User.findOne({
              where: { email },
              attributes: ["id", "name", "email", "lastName", "date_of_birth"],
              include: [{ model: Cat }],
            });
            res.status(200).json({
              success: true,
              message: user,
            });
          } else {
            throw new Error("Password dont match");
          }
        } catch (err) {
          return res.status(500).json({
            success: false,
            message: err.message,
          });
        }
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  },
};
