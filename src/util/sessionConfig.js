const session = require("express-session");
const SequalizeStore = require("connect-session-sequelize")(session.Store);
const { Sequelize } = require("sequelize");
const database = require("../config/Databases");

const sequalize = new Sequelize(database.development);

const store = new SequalizeStore({
  db: sequalize,
});

// store.sync();
const configSession = () => {
  return session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
      maxAge: 24 * 60 * 60 * 1000,
    },
  });
};

module.exports = configSession;
