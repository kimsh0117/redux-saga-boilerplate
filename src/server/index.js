const express = require("express");
const router = require("./routes/routes");

const port = process.env.PORT || 3001;

const app = express();

app.use('/', router);

app.listen(port, ()=> {
  console.log("App listening on port" + port );
});