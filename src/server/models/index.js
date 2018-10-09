const db = require('../db');

module.exports = {
  world: {
    get: function(req, callback) {
      let country = req.query.counry;
      let query = `SELECT Name, Region FROM country WHERE Name = '${country}'`
      db.query(query, (err, results) => {
        callback(err, results);
      })
    }
  }
}