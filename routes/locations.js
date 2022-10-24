let express = require('express');
let router = express.Router();
let database = require('../database');

/* GET users listing. */
router.get('/', async function(req, res, next) {
    //database.insertOne('locations', {
    //    'latitude': 5,
    //    'longitude': 5
    //})
    let locations = await database.findAll('locations');
    return res.send(locations);
});

module.exports = router;
