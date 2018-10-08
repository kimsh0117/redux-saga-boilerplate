const express = require('express');
const controller = require('../controllers');
const router = express.Router();

router.get('/world', controller.world.get);

module.exports = router;