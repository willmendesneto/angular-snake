(function() {
  'use strict';

  function commands($window, $rootScope, CONFIG) {
    var directive = {
      restrict: 'A',
      scope: {
        snake: '='
      },
      link: function(scope) {

        $window.addEventListener('keyup', function(e) {

          if (e.keyCode == CONFIG.DIRECTIONS.LEFT && scope.snake.direction !== CONFIG.DIRECTIONS.RIGHT) {
            $rootScope.tempDirection = CONFIG.DIRECTIONS.LEFT;
          } else if (e.keyCode == CONFIG.DIRECTIONS.UP && scope.snake.direction !== CONFIG.DIRECTIONS.DOWN) {
            $rootScope.tempDirection = CONFIG.DIRECTIONS.UP;
          } else if (e.keyCode == CONFIG.DIRECTIONS.RIGHT && scope.snake.direction !== CONFIG.DIRECTIONS.LEFT) {
            $rootScope.tempDirection = CONFIG.DIRECTIONS.RIGHT;
          } else if (e.keyCode == CONFIG.DIRECTIONS.DOWN && scope.snake.direction !== CONFIG.DIRECTIONS.UP) {
            $rootScope.tempDirection = CONFIG.DIRECTIONS.DOWN;
          }
        });
      }
    };

    return directive;
  }

  angular.module('snakeGameApp')
    .directive('commands', commands);

  commands.$inject = ['$window', '$rootScope', 'CONFIG'];

}());
