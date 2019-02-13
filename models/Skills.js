const mongoose = require("mongoose");
const { Schema } = mongoose;

const skillsSchema = new Schema({
  skill_code: String,
  skill_name: String
});

mongoose.model("skills", skillsSchema);
