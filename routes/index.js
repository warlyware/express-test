var express = require('express');
var fs = require('fs');
var jsonData = require('../data.json');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { quotes: jsonData.quotes });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'This is the about page' });
});

router.get('/quotes', function(req, res) {
  console.log('Got it!');
  res.json(jsonData);
});

router.post('/quotes', function(req, res) {
  // console.log(req.body);
  var newQuote = req.body.quote;
  console.log(jsonData.quotes.indexOf(newQuote));

  if (!newQuote) {
    res.status(404).json('We need text for that quote');
    return;
  } 
  if (jsonData.quotes.indexOf(newQuote) > -1) {
    res.status(404).json('Quote already added');
    return;
  }
  jsonData.quotes.push(newQuote);
  fs.writeFile('data.json', JSON.stringify(jsonData), function(err) {
    if (err) {
      console.error(err);
      res.status(500).send('Could not save the quote, please try later');
    } else {
    }
    res.redirect('/quotes');
  });
});

// router.get('/quotes/:id', function(req, res, next) {
//   res.send(jsonData.quotes[+req.params.id - 1]);
// });


module.exports = router;