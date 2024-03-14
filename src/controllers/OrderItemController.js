const { OrderItem } = require("../db/models");

module.exports.createOrderItem = async (req, res) => {
  try {
    const data = await OrderItem.create(req.body);
    res.status(201).json({ msg: "Order item created success", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getOrderItems = async (req, res) => {
  try {
    const data = await OrderItem.findAll();
    res.status(200).json({ msg: "get Order item Success", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getOrderItemById = async (req, res) => {
  try {
    const data = await OrderItem.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Order item not found" });
    }
    res.status(200).json({ msg: "Get Order item Success", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.updateOrderItem = async (req, res) => {
  try {
    const data = await OrderItem.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Order item not found" });
    }
    await data.update(req.body);
    res.status(200).json({ msg: "Update Order item Success", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.deleteOrderItem = async (req, res) => {
  try {
    const data = await OrderItem.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Order item not found" });
    }
    await orderItem.destroy();
    res.status(204).json({ message: "Order item deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
