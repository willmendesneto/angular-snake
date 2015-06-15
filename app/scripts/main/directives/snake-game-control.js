(function() {
  'use strict';

  function snakeGameControl() {
    var directive = {
      restrict: 'E',
      templateUrl: 'scripts/main/views/directives/snake-game-control.tpl.html'
    };

    return directive;
  }

  angular.module('snakeGameApp')
    .directive('snakeGameControl', snakeGameControl);

}());
