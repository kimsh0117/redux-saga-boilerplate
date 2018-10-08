const models = require('../models');

module.exports = {
  world: {
    get: function(req, res) {
      models.world.get(function(err, results) {
        res.json(results);
      })
    }
  }
}