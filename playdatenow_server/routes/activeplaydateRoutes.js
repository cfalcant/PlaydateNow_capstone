const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/*GET active_playdates*/
router.get('/', function (req, res, next) {
    knex('activeplaydates').then(activeplaydates => res.json(activeplaydates))
});

module.exports = router;