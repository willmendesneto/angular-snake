'use strict';

describe('Service: CONFIG', function () {

  // load the service's module
  beforeEach(module('snakeGameApp'));

  // instantiate service
  var CONFIG;
  beforeEach(inject(function (_CONFIG_) {
    CONFIG = _CONFIG_;
  }));

  it('Config setup', function () {
    expect(!!CONFIG).toBe(true);
    expect(Object.keys(CONFIG).length).toEqual(6);
    expect(typeof CONFIG.DIRECTIONS).toEqual('object');
    expect(Object.keys(CONFIG.DIRECTIONS).length).toEqual(4);
    expect(CONFIG.BOARD_SIZE).toEqual(20);
    expect(CONFIG.INTERVAL).toEqual(200);
    expect(CONFIG.GAME_OVER_TIMEOUT).toEqual(300);
    expect(CONFIG.DECREASE_INTERVAL).toEqual(15);
    expect(Object.keys(CONFIG.COLORS).length).toEqual(5);
  });


});
