const express = require("express");
const app = express.Router();

const productsRoutes = require("./productsRoutes");
const usersRoutes = require("./usersRoutes");
const orderRoutes = require("./orderRoutes");
const AddressesRoutes = require("./addressRoutes");
const orderItemsRoutes = require("./orderItems");
const transactionRoutes = require("./transactionRoutes");
const authRouter = require("./authRouter");
const { verifyLogin } = require("../config/Security");

app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.use("/orders", verifyLogin, orderRoutes);
app.use("/Addresses", AddressesRoutes);
app.use("/orderItems", verifyLogin, orderItemsRoutes);
app.use("/transactions", verifyLogin, transactionRoutes);
app.use("/", authRouter);

module.exports = app;
