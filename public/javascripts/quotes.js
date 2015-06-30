var app = angular.module('quotesApp', []);

app.controller('QuotesCtrl', function($http, $scope) {
  // var quotes = '../data.json';
  $http.get('/quotes')
  .success(function(data) {
    $scope.quotes = data.quotes;
    console.log($scope.quotes);
  });

  $scope.addQuote = function(quote) {
    console.log('add quote ' + quote);
    $http.post('/quotes', {quote: quote}).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

  }

});