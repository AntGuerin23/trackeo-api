let express = require('express');
let router = express.Router();
let database = require('../database');
let mqtt = require('../mqtt.js');

/* GET users listing. */
router.get('/', async function(req, res, next) {
    mqtt.askForLocation();
    let locations = await database.findAll('locations');
    return res.send(locations);
});

module.exports = router;
