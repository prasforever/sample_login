var mongoose = require("mongoose");
const Skills = mongoose.model("skills");

module.exports = app => {
  app.post("/api/getSkills", async (req, res) => {
    console.log("In SkillsFunc");
    console.log(req.body);

    const skills = await Skills.find(
      {
        value: { $regex: ".*" + req.body.value + ".*" }
      },
      { _id: false }
    );
    res.send(skills);
  });
};
