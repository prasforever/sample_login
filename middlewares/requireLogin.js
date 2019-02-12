/// Middleware to validate access to private routes

module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "Please Log in" });
  }

  next();
};
