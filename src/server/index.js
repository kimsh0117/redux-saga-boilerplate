const express = require("express");

const bodyParser = require("body-parser");
const mysql = require("mysql")
const port = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'world',
  user: 'root',
  password: 'ti4809py'
});

connection.connect(function(err){
  if(err) {
    console.error(err);
    return;
  } else {
    console.log('connected')
  }
})

app.get('/world/search', function(req, res) {
  let country = (req.query.country);
  let q = `SELECT Name, Region FROM country WHERE Name = '${country}'`
  connection.query(q, function (err, results) {
      if (err) throw err;
      console.log(results)
      res.json(results); 
  })

});

app.listen(port, ()=> {
  console.log("App listening on port" + port );
});