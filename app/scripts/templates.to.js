angular.module('myApp.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("scripts/main/views/directives/snake-game-arrow-control.tpl.html",
    "<aside class=controls><div class=\"left enabled\" ng-click=snakeControlCtrl.setLeftDirection()></div><div class=\"right enabled\" ng-click=snakeControlCtrl.setRightDirection()></div><div class=\"up enabled\" ng-click=snakeControlCtrl.setUpDirection()></div><div class=\"down enabled\" ng-click=snakeControlCtrl.setDownDirection()></div></aside>");
  $templateCache.put("scripts/main/views/directives/snake-game-control.tpl.html",
    "<h3>Score: {{ mainCtrl.score }}</h3><snake-game-arrow-control></snake-game-arrow-control>");
  $templateCache.put("scripts/main/views/directives/snake-game.tpl.html",
    "<div id=game-container commands snake=mainCtrl.snake><div class=snake-game-background><div ng-repeat=\"column in mainCtrl.board\"><div class=column ng-class=\"{fruit: mainCtrl.addClassInTarget($parent.$index, $index)}\" ng-style=\"{'background-color': mainCtrl.setStyling($parent.$index, $index)}\" ng-repeat=\"row in column track by $index\"><span ng-if=\"mainCtrl.addClassInTarget($parent.$index, $index)\"><div class=column-target></div></span></div></div></div><button id=start-game class=\"btn btn-lg\" ng-disabled=\"mainCtrl.gameStarted === true\" ng-click=mainCtrl.startGame()>Start Game</button></div>");
  $templateCache.put("scripts/main/views/main.html",
    "<div class=row><div class=col-lg-6><snake-game></snake-game></div><div class=col-lg-6><snake-game-control></snake-game-control></div></div>");
}]);
