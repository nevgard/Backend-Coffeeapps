const { Transactions } = require("../db/models");

module.exports.createTransaction = async (req, res) => {
  try {
    const transaction = await Transactions.create(req.body);
    res.status(201).json({ transaction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transactions.findAll();
    res.status(200).json({ transactions });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getTransactionById = async (req, res) => {
  try {
    const transaction = await Transactions.findByPk(req.params.id);
    if (!transaction) {
      return res.status(404).json({ error: "Transaction not found" });
    }
    res.status(200).json({ transaction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.updateTransaction = async (req, res) => {
  try {
    const transaction = await Transactions.findByPk(req.params.id);
    if (!transaction) {
      return res.status(404).json({ error: "Transaction not found" });
    }
    await transaction.update(req.body);
    res.status(200).json({ transaction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transactions.findByPk(req.params.id);
    if (!transaction) {
      return res.status(404).json({ error: "Transaction not found" });
    }
    await transaction.destroy();
    res.status(204).json({ message: "Transaction deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
