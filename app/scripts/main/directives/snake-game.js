(function() {
  'use strict';

  function snakeGame() {
    var directive = {
      restrict: 'E',
      templateUrl: 'scripts/main/views/directives/snake-game.tpl.html'
    };

    return directive;
  }

  angular.module('snakeGameApp')
    .directive('snakeGame', snakeGame);

}());
