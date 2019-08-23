const express = require("express");
const PORT = process.env.PORT || 3000;
...
const app = express();
const path = require("path");
const babel = require("babel-register")({
  presets: ["env"]
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static( path.join( __dirname, "./app/public" ) ));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });