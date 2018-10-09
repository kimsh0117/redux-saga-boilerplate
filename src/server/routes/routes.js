const express = require('express');
const controller = require('../controllers');
const router = express.Router();

router.get('/search', controller.world.get);

module.exports = router;