const { OrderItems } = require("../db/models");

module.exports.createOrderItem = async (req, res) => {
  try {
    const orderItem = await OrderItems.create(req.body);
    res.status(201).json({ orderItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getOrderItems = async (req, res) => {
  try {
    const orderItems = await OrderItems.findAll();
    res.status(200).json({ orderItems });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getOrderItemById = async (req, res) => {
  try {
    const orderItem = await OrderItems.findByPk(req.params.id);
    if (!orderItem) {
      return res.status(404).json({ error: "Order item not found" });
    }
    res.status(200).json({ orderItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.updateOrderItem = async (req, res) => {
  try {
    const orderItem = await OrderItems.findByPk(req.params.id);
    if (!orderItem) {
      return res.status(404).json({ error: "Order item not found" });
    }
    await orderItem.update(req.body);
    res.status(200).json({ orderItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.deleteOrderItem = async (req, res) => {
  try {
    const orderItem = await OrderItems.findByPk(req.params.id);
    if (!orderItem) {
      return res.status(404).json({ error: "Order item not found" });
    }
    await orderItem.destroy();
    res.status(204).json({ message: "Order item deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
