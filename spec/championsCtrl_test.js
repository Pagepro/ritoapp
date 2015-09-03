describe('ChampionsController', function() {
  var ChampionsController, scope, httpBackend;

  beforeEach(module('ritoApp'));


  beforeEach(inject(function($rootScope, $controller, _$httpBackend_) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_; // not used yet
    ChampionsController = $controller('ChampionsController', {
      '$scope': scope
    });
  }));


  it('should check if display mode is true for list and flase for grid', function() {
    expect(scope.displayMode.grid).toBe(false);
    expect(scope.displayMode.list).toBe(true);
  });

  it('should change display mode', function () {
    scope.changeDisplayMode('grid');
    expect(scope.displayMode.grid).toBe(true);
    expect(scope.displayMode.list).toBe(false);
  })

});
