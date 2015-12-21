var express = require('express');
var router = express.Router();
var Indicator = require('../models/Indicator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user/', function(req, res, next) {
  var gdp = new Indicator({
    name: 'GDP',
    value: 2,
    previous: 2
  });

  gdp.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully 3!');
  });
  res.render('user', { title: 'Express' });
});

module.exports = router;
