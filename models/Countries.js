var mongoose = require("mongoose");
const { Schema } = mongoose;

const countrySchema = new Schema({
  country_code: String,
  country_name: String
});

mongoose.model("countries", countrySchema);
