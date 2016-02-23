// Code goes here

(function() {

  var app = angular.module("githubViewer", []);

  var MainController = function($scope, $http) {

    /*var person = {
      firstName: "Scott",
      lastName: "Allen",
      imageSrc: "http://odetocode.com/Images/scott_allen_2.jpg"
    };*/

    var onUserComplete = function(response) {
      $scope.user = response.data;
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch the error";
    };

    $scope.search = function(username) {
      $http.get("https://api.github.com/users/" + username)
        .then(onUserComplete, onError);
    };

    $scope.username = "angular"
    $scope.message = "GitHub Viewer";
    //$scope.person = person;

  };

  app.controller("MainController", ["$scope", "$http", MainController]);

}());