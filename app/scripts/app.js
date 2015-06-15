(function() {
  'use strict';

  angular.module('snakeGameApp', [
    'ngRoute',
    'keepr'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/main/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

}());
