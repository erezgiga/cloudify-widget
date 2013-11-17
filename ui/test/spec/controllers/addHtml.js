'use strict';

describe('Controller: AddhtmlCtrl', function () {

  // load the controller's module
  beforeEach(module('widgetApp'));

  var AddhtmlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddhtmlCtrl = $controller('AddhtmlCtrl', {
      $scope: scope
    });
  }));
});
