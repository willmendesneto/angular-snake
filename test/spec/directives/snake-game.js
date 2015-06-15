'use strict';

describe('Directive: navbar', function () {

  // load the directive's module
  beforeEach(module('snakeGameApp'));

  var element,
    template,
    httpBackend,
    scope;

  beforeEach(inject(function ($rootScope, $compile, _$httpBackend_) {
    scope = $rootScope.$new();
    httpBackend = _$httpBackend_;

    template = '' +
    '<div id="gameContainer" commands snake="mainCtrl.snake">' +
      '<h3>Score: {{mainCtrl.score}}</h3>' +
      '<div>' +
          '<div class="row" ng-repeat="column in mainCtrl.board">' +
              '<div class="column"' +
                  'ng-style="{\'background-color\': mainCtrl.setStyling($parent.$index, $index)}"' +
                  'ng-repeat="row in column track by $index">' +
              '</div>' +
          '</div>' +
      '</div>' +
      '<button id="startGame" ng-click="mainCtrl.startGame()">Start Game</button>' +
    '</div>';
    httpBackend.whenGET('scripts/main/views/directives/snake-game.tpl.html').respond(template);

    element = angular.element(template);
    element = $compile(element)(scope);
  }));

  it('should create a navbar header with ".header" class in element', function () {
    expect(element.hasClass('header')).toBe(true);
  });

  it('should create a navbar header with ng-controller value equals "NavbarCtrl"', function () {
    expect(element.attr('ng-controller')).toEqual('NavbarCtrl');
  });

});
