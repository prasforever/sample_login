const { Seeder } = require("mongo-seeding");
const path = require("path");

const keys = require("./config/keys.js");

const config = {
  database: keys.mongoURI,
  inputPath: path.resolve(__dirname, "./data"),
  dropDatabase: false
};

const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(path.resolve("./data"));
const main = async () => {
  try {
    await seeder.import(collections);
    console.log("Seed complete!");
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(0);
  }
};

main();
