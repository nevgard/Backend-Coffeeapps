const { Addresses } = require("../db/models");

module.exports.getAddresses = async (req, res) => {
  try {
    const data = await Addresses.findAll();
    res.status(200).json({ msg: "get Address Success", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.createAddresses = async (req, res) => {
  try {
    const data = await Addresses.create(req.body);
    res.status(201).json({ msg: "Add Address Success", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getAddressesByUserId = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    const data = await Addresses.findAll({
      where: {
        userId: userId,
      },
    });
    res.status(200).json({ msg: "get Address Success", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.updateAddresses = async (req, res) => {
  try {
    const data = await Addresses.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Address not found" });
    }
    await address.update(req.body);
    res.status(200).json({ msg: "Update Address Success", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.deleteAddresses = async (req, res) => {
  try {
    const data = await Addresses.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Address not found" });
    }
    await data.destroy();
    res.status(204).json({ message: "Address deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
