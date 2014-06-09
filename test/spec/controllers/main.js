'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('hondacarsalesjourneyApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of carModels to the scope', function () {
    expect(scope.carModels.length).toBe(6);
  });

  it('should attach a list of carModels to the scope', function () {
    expect(scope.carModels.length).not.toBe(3);
  });
});
