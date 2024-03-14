const verifyLogin = (req, res, next) => {
  if (!req.session || !req.session.userId) {
    return res.status(401).json({ error: "Please login first" });
  }
  next();
};

module.exports = { verifyLogin };
