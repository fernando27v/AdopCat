const { Cat } = require("../../db.js");


module.exports = {
  myCats: async (req, res) => {
    const { UserId } = req.body;
    try {
      const cats = await Cat.findAll({
        where: { UserId },
      });

      if (!cats) {
        throw new Error("Cats not found");
      }

     res.status(200).json({success: true,message: cats})     
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  },
};