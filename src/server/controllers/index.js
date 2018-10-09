const models = require('../models');

module.exports = {
  world: {
    get: function(req, res) {
      models.world.get(req, (err, results) => {
        if(err) res.status(500).send(err);
        res.json(results);
      })
    }
  }
}