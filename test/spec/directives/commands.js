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

    template = '<div commands snake=""></div>';

    httpBackend.whenGET('views/directives/navbar.html').respond(template);

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
