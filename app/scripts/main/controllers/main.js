/* globals confirm */
(function() {
  'use strict';

  function MainCtrl($scope, $timeout, $rootScope, CONFIG) {

    this.board = [];
    this.isGameOver = false;
    this.gameStarted = false;
    this.interval = CONFIG.INTERVAL;
    this.score = 0;

    var level = 1;

    this.snake = {
      direction: CONFIG.DIRECTIONS.LEFT,
      parts: [{
        x: -1,
        y: -1
      }]
    };

    this.fruit = {
      x: -1,
      y: -1
    };

    this.getNewHead = function() {
      var newHead = angular.copy(this.snake.parts[0]);
      // Update Location
      if ($rootScope.tempDirection === CONFIG.DIRECTIONS.LEFT) {
          newHead.x -= 1;
      } else if ($rootScope.tempDirection === CONFIG.DIRECTIONS.RIGHT) {
          newHead.x += 1;
      } else if ($rootScope.tempDirection === CONFIG.DIRECTIONS.UP) {
          newHead.y -= 1;
      } else if ($rootScope.tempDirection === CONFIG.DIRECTIONS.DOWN) {
          newHead.y += 1;
      }
      return newHead;
    };

    this.setStyling = function(col, row) {
      if (this.isGameOver)  {
        return CONFIG.COLORS.GAME_OVER;
      } else if (this.fruit.x == row && this.fruit.y == col) {
        return CONFIG.COLORS.FRUIT;
      } else if (this.snake.parts[0].x == row && this.snake.parts[0].y == col) {
        return CONFIG.COLORS.SNAKE_HEAD;
      } else if (this.board[col][row] === true) {
        return CONFIG.COLORS.SNAKE_BODY;
      }
      return CONFIG.COLORS.BOARD;
    };

    this.addClassInTarget = function(col, row) {
      return this.fruit.x == row && this.fruit.y == col;
    };

    this.update = function() {

      var newHead = this.getNewHead();
      if (this.boardCollision(newHead) || this.selfCollision(newHead)) {
        return this.gameOver();
      } else if (this.fruitCollision(newHead)) {
        this.eatFruit();
      }

      // Remove tail
      var oldTail = this.snake.parts.pop();
      this.board[oldTail.y][oldTail.x] = false;

      // Pop tail to head
      this.snake.parts.unshift(newHead);
      this.board[newHead.y][newHead.x] = true;

      var self = this;
      // Do it again
      this.snake.direction = $rootScope.tempDirection;
      $timeout(function(){
        self.update();
      }, this.interval);
    };

    this.boardCollision = function(part) {
      return part.x === CONFIG.BOARD_SIZE || part.x === -1 || part.y === CONFIG.BOARD_SIZE || part.y === -1;
    };

    this.selfCollision = function(part) {
      return this.board[part.y][part.x] === true;
    };

    this.fruitCollision = function(part) {
      return part.x === this.fruit.x && part.y === this.fruit.y;
    };

    this.resetFruit = function() {
      var x = Math.floor(Math.random() * CONFIG.BOARD_SIZE);
      var y = Math.floor(Math.random() * CONFIG.BOARD_SIZE);

      if (this.board[y][x] === true) {
        return this.resetFruit();
      }
      this.fruit = {x: x, y: y};
    };

    this.eatFruit = function() {
      this.score = this.score + 1;

      // Grow by 1
      var tail = angular.copy(this.snake.parts[this.snake.parts.length-1]);
      this.snake.parts.push(tail);
      this.resetFruit();

      if (this.score % 5 === 0) {
        level++;
        this.interval -= CONFIG.DECREASE_INTERVAL;
      }
    };

    this.gameOver = function() {
      this.gameStarted = false;
      this.isGameOver = true;
      var self = this;
      $timeout(function() {
        self.isGameOver = false;
      }, CONFIG.GAME_OVER_TIMEOUT);

      this.setupBoard();
    };

    this.setupBoard = function() {
      this.board = [];
      for (var i = 0; i < CONFIG.BOARD_SIZE; i++) {
        this.board[i] = [];
        for (var j = 0; j < CONFIG.BOARD_SIZE; j++) {
          this.board[i][j] = false;
        }
      }
    };

    this.startGame = function() {
      this.snake = {
        direction: CONFIG.DIRECTIONS.LEFT,
        parts: []
      };
      $rootScope.tempDirection = CONFIG.DIRECTIONS.LEFT;

      // Set up initial snake
      for (var i = 0; i < 5; i++) {
        this.snake.parts.push({x: 10 + i, y: 10});
      }

      level = 1;
      this.isGameOver = false;
      this.interval = CONFIG.INTERVAL;
      this.score = 0;
      this.gameStarted = true;
      this.resetFruit();
      this.update();

      alert('Clicked!');
    };

    /**
     * Method for class initialization
     * @return {[type]} [description]
     */
    this.init = function(){
      this.setupBoard();
    };

    this.init();

  }

  angular.module('snakeGameApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', '$timeout', '$rootScope', 'CONFIG'];

}());
