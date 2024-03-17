const argon2 = require("argon2");
const { Users } = require("../db/models");
const { Addresses } = require("../db/models");
const { Orders } = require("../db/models/");

module.exports.createUser = async (req, res) => {
  const { fullName, email, password, confirmPassword, birthDate, phoneNumber } =
    req.body;
  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ error: "Password and confirm password not match" });
  }
  if (!fullName || !email || !password || !birthDate || !phoneNumber) {
    return res.status(400).json({ error: "Please fill all fields" });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters" });
  }
  if (phoneNumber.length < 10) {
    return res
      .status(400)
      .json({ error: "Phone number must be at least 10 characters" });
  }

  try {
    const existingEmail = await Users.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already exists" });
    }
    const existingPhoneNumber = await Users.findOne({
      where: { phoneNumber },
    });
    if (existingPhoneNumber) {
      return res.status(400).json({ error: "Phone number already exists" });
    }
    const hashedPassword = await argon2.hash(password);

    const data = await Users.create({
      fullName,
      email,
      password: hashedPassword,
      birthDate,
      phoneNumber,
    });
    res.status(201).json({ msg: "User created success", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getUsers = async (req, res) => {
  try {
    const data = await Users.findAll({
      attributes: ["id", "fullName", "email", "birthDate", "phoneNumber"],
    });
    res.status(200).json({ msg: "Get all users success", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getUserById = async (req, res) => {
  try {
    const data = await Users.findByPk(req.params.id, {
      include: [
        {
          model: Addresses,
          as: "Addresses",
          attributes: ["id", "address", "subDistrict", "city"],
        },
        { model: Orders, as: "orders", attributes: ["id", "totalPrice"] },
      ],
    });
    if (!data) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ msg: "Get user success", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { fullName, email, password, confirmPassword, birthDate, phoneNumber } =
    req.body;

  try {
    // Check if user exists
    const existingUser = await Users.findByPk(id);
    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if email is provided and if it's different from the existing one
    if (email && email !== existingUser.email) {
      // Check if new email already exists
      const existingEmail = await Users.findOne({ email });
      if (existingEmail) {
        return res.status(400).json({ error: "Email already exists" });
      }
    }

    // Check if phone number is provided and if it's different from the existing one
    if (phoneNumber && phoneNumber !== existingUser.phoneNumber) {
      // Check if new phone number already exists
      const existingPhoneNumber = await Users.findOne({ phoneNumber });
      if (existingPhoneNumber) {
        return res.status(400).json({ error: "Phone number already exists" });
      }
    }

    // Check if password is provided and if it's different from the current password
    if (password && password !== confirmPassword) {
      return res
        .status(400)
        .json({ error: "Password and confirm password not match" });
    }

    // Check if password is provided and if it's different from the current password
    let isPasswordChanged = false;
    if (password) {
      // Verify if the provided password matches the current hashed password
      const passwordMatches = await argon2.verify(
        existingUser.password,
        password
      );
      if (!passwordMatches) {
        isPasswordChanged = true;
        // Hash the new password
        const hashedPassword = await argon2.hash(password);
        existingUser.password = hashedPassword;
      }
    }

    // Check if any field is different from existing user data
    const isAnyFieldChanged =
      (fullName && fullName !== existingUser.fullName) ||
      (email && email !== existingUser.email) ||
      (birthDate && birthDate !== existingUser.birthDate) ||
      (phoneNumber && phoneNumber !== existingUser.phoneNumber) ||
      isPasswordChanged;

    if (!isAnyFieldChanged) {
      return res.status(400).json({ error: "No field to update" });
    }

    // Update user fields
    if (fullName) existingUser.fullName = fullName;
    if (email) existingUser.email = email;
    if (birthDate) existingUser.birthDate = birthDate;
    if (phoneNumber) existingUser.phoneNumber = phoneNumber;

    // Save the updated user
    const updatedUser = await existingUser.save();
    res.status(200).json({ msg: "User updated success", data: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const data = await Users.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "User not found" });
    }
    await data.destroy();
    res.status(204).json({ message: "User deleted success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
