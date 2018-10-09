const express = require("express");
const router = require("./routes/routes");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3001;

const app = express();

app.use('/world', router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, ()=> {
  console.log("App listening on port" + port );
});