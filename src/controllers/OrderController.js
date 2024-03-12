const { Orders } = require("../db/models");

module.exports.createOrder = async (req, res) => {
  try {
    const order = await Orders.create(req.body);
    res.status(201).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getOrders = async (req, res) => {
  try {
    const orders = await Orders.findAll();
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getOrderById = async (req, res) => {
  try {
    const order = await Orders.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.updateOrder = async (req, res) => {
  try {
    const order = await Orders.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    await order.update(req.body);
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.deleteOrder = async (req, res) => {
  try {
    const order = await Orders.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    await order.destroy();
    res.status(204).json({ message: "Order deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
