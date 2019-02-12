const express = require("express");
const app = express();

require("./routes/userRoutes")(app);

app.listen(4000);
