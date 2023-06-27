const db = require("../models");
const sequelize = db.sequelize;
const User = db.user;

const addUser = async (req, res) => {
  const { id, firstName, lastName, email } = req.body;

  try {
    const createdUser = await sequelize.transaction(async (t) => {
      const [newUser] = await User.findOrCreate({
        where: { email },
        defaults: { id, firstName, lastName, email },
        transaction: t,
      });

      return newUser;
    });
    res
      .status(200)
      .json({ message: "User created successfully", user: createdUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create user" });
  }
};

module.exports = {
  addUser,
};
