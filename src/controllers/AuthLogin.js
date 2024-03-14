const argon2 = require("argon2");
const { Users } = require("../db/models");

module.exports.Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Verify password
    const passwordMatches = await argon2.verify(user.password, password);
    if (!passwordMatches) {
      return res.status(401).json({ msg: "Invalid password" });
    }

    // Set user session
    req.session.userId = user.id;

    res.status(200).json({ msg: "User logged in successfully", data: user });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports.getMe = async (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  try {
    const user = await Users.findByPk(userId);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json({ data: user });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports.Logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({ msg: "Failed to logout" });
    } else {
      res.status(200).json({ msg: "User logged out successfully" });
    }
  });
};
