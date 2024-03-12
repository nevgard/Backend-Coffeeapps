const express = require("express");
const app = express.Router();

const productsRoutes = require("./productsRoutes");
const usersRoutes = require("./usersRoutes");
const orderRoutes = require("./orderRoutes");
const AddressesRoutes = require("./addressRoutes");
const orderItemsRoutes = require("./orderItems");
const transactionRoutes = require("./transactionRoutes");

app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.use("/orders", orderRoutes);
app.use("/Addresses", AddressesRoutes);
app.use("/orderItems", orderItemsRoutes);
app.use("/transactions", transactionRoutes);

module.exports = app;
