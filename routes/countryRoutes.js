var mongoose = require("mongoose");
const Countries = mongoose.model("countries");

module.exports = app => {
  app.get("/api/getCountries", async (req, res) => {
    const countries = await Countries.find();
    res.send(countries);
  });
};
