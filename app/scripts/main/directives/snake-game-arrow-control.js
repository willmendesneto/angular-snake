(function() {
  'use strict';

  function snakeGameArrowControl() {
    var directive = {
      restrict: 'E',
      templateUrl: 'scripts/main/views/directives/snake-game-arrow-control.tpl.html',
      controller: 'SnakeControlCtrl',
      controllerAs: 'snakeControlCtrl'
    };

    return directive;
  }

  angular.module('snakeGameApp')
    .directive('snakeGameArrowControl', snakeGameArrowControl);

}());
