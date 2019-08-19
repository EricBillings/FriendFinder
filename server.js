const express = require("express");
const PORT = 3000;
const app = express();



require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });