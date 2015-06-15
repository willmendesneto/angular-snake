/* globals confirm */
(function() {
  'use strict';

  function SnakeControlCtrl($scope, $rootScope, CONFIG) {

    this.setTempDirection = function(direction) {
      $rootScope.tempDirection = direction;
    };

    this.setUpDirection = function() {
      this.setTempDirection(CONFIG.DIRECTIONS.UP);
    };

    this.setDownDirection = function() {
      this.setTempDirection(CONFIG.DIRECTIONS.DOWN);
    };

    this.setLeftDirection = function() {
      this.setTempDirection(CONFIG.DIRECTIONS.LEFT);
    };

    this.setRightDirection = function() {
      this.setTempDirection(CONFIG.DIRECTIONS.RIGHT);
    };

  }

  angular.module('snakeGameApp')
    .controller('SnakeControlCtrl', SnakeControlCtrl);

  SnakeControlCtrl.$inject = ['$scope', '$rootScope', 'CONFIG'];

}());
