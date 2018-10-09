const mysql = require("mysql");

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

module.export = connection;
