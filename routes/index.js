var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', color: 'red' });
});

router.get('/test', function(req, res, next) {
  res.render('test', {});
});


router.get('/aboutus', function(req, res, next) {
  res.render('aboutus', {});
});

module.exports = router;
