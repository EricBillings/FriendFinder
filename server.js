const path = require("path");
const express = require("express");
const PORT = 3000;

let app = express();



app.get('/', function (req, res) {
    res.send('Hello World')
  })
   
  app.listen(PORT, function () {
      console.log(`Listening on http://localhost:${PORT}`);
  })