
(function() {
  'use strict';

  /**
   * Initial listContacts list
   *
   * @type {Array}
   */
  angular.module('snakeGameApp')
    .value('CONFIG', {
      DIRECTIONS: {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
      },
      BOARD_SIZE: 20,
      INTERVAL: 200,
      GAME_OVER_TIMEOUT: 300,
      DECREASE_INTERVAL: 15,
      COLORS: {
        GAME_OVER: '#820303',
        FRUIT: '#E80505',
        SNAKE_HEAD: '#078F00',
        SNAKE_BODY: '#0DFF00',
        BOARD: '#000'
      }
    });

}());
