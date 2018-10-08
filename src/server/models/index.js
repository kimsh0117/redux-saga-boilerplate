const db = require('../db');

module.exports = {
  world: {
    get: function(callback) {
      db.query('select Name, Region, Population from country', function(err, results){
        callback(err, results);
      })
    }
  }
}