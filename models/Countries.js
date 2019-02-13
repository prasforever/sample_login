const mongoose = require("mongoose");
const { Schema } = mongoose;

const countrySchema = new Schema({
  country_code: String,
  country_name: String
});

module.exports = countrySchema;
