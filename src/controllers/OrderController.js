const { Orders } = require("../db/models");

module.exports.createOrder = async (req, res) => {
  try {
    const data = await Orders.create(req.body);
    res.status(201).json({ mssg: "Order created success", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getOrders = async (req, res) => {
  try {
    const data = await Orders.findAll();
    res.status(200).json({ msg: "get Orders Success", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getOrderById = async (req, res) => {
  try {
    const data = await Orders.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json({ msg: "Get Order Success", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.updateOrder = async (req, res) => {
  try {
    const data = await Orders.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Order not found" });
    }
    await data.update(req.body);
    res.status(200).json({ msg: " Update Order Success", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.deleteOrder = async (req, res) => {
  try {
    const data = await Orders.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Order not found" });
    }
    await data.destroy();
    res.status(204).json({ message: "Order deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
