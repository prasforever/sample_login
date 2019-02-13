const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  if (process.env.PORT) {
    app.use(
      proxy("/api/*", {
        target: "http://localhost:" + process.env.PORT
      })
    );
  } else {
    app.use(
      proxy("/api/*", {
        target: "http://localhost:4000"
      })
    );
  }
};
