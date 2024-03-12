const { Products } = require("../db/models");

module.exports.getProducts = async (req, res) => {
  try {
    const products = await Products.findAll({
      attributes: ["id", "name", "price", "category", "stock", "image"],
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getProductById = async (req, res) => {
  try {
    const product = await Products.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
