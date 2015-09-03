describe('ChampionController', function() {
  var ChampionController, scope, httpBackend;

  beforeEach(module('ritoApp'));


  beforeEach(inject(function($rootScope, $controller, _$httpBackend_) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_; // not used yet
    ChampionsController = $controller('ChampionController', {
      '$scope': scope
    });
  }));


  it('should check data from API', function() {
    expect(scope.testItIdiot).toBeDefined();
  });

});
