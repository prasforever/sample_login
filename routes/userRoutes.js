module.exports = app => {
  app.get("/", (req, res) => {
    res.send({ Express: "Running Strong" });
  });

  app.get("/profile", (req, res) => {
    res.send({ Express: "Show Profile" });
  });
};
