var app = angular.module('quotesApp', []);

app.controller('QuotesCtrl', function($http, $scope) {
  // var quotes = '../data.json';
  $http.get('/quotes')
  .success(function(data) {
    $scope.quotes = data.quotes;
    console.log($scope.quotes);
  });

});