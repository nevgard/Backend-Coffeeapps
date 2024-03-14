const express = require("express");
const cors = require("cors");
const SequelizeStore = require("connect-session-sequelize");
require("dotenv").config();

const router = require("./src/routers/index");
const configSession = require("./src/util/sessionConfig");

const app = express();
const PORT = process.env.PORT || 9001;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(configSession());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
