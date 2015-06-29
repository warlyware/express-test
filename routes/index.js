var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This is the index page' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'This is the about page' });
});


router.get('/data', function(req, res, next) {
  console.log(req.query);
  var string1 = 'You have to learn the rules of the game. And then you have to play better than anyone else.';
  var string2 = 'Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.';
  var string3 = 'Look deep into nature, and then you will understand everything better.';
  var string4 = 'Try not to become a man of success, but rather try to become a man of value.';
  if (req.query.id == 1) {
    res.write(string1);
  } else if (req.query.id == 2) {
    res.json(string2);
  } else if (req.query.id == 3) {
    res.json(string3);
  } else if (req.query.id == 4) {
    res.json(string4);
  } else {
    var ip = req.connection.remoteAddress;
    res.json({a: 4, b: 2, ip: ip});
  }
});


module.exports = router;
