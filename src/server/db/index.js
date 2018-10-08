const mysql = require("mysql");

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'world',
  user: 'root',
  password: 'ti4809py'
});

connection.connect(function(err){
  if(err) {
    console.log('db is not connected'); return;
  } else {
    console.log('connected')
  }
})

module.export = connection;
