var express = require('express');
var fs = require('fs');
var jsonData = require('../data.json');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This is the index page' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'This is the about page' });
});

router.get('/quotes', function(req, res) {
  console.log('Got it!');
  res.render('quotes', { quotes: jsonData.quotes });
});

router.post('/quotes', function(req, res) {
  // console.log(req.body);
  var newQuote = req.body.quote;
  jsonData.quotes.push(newQuote);
  fs.writeFile('data.json', JSON.stringify(jsonData), function(err) {
    if (err) {
      console.error(err);
      res.status(500).send('Could not save the quote, please try later');
    } else {
      res.redirect('/quotes');
    }
  });
});

// router.get('/quotes/:id', function(req, res, next) {
//   res.send(jsonData.quotes[+req.params.id - 1]);
// });


module.exports = router;