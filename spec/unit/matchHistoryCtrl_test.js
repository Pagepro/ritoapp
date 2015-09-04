describe('MatchHistoryController', function() {
  var MatchHistoryController, scope, httpBackend;

  beforeEach(module('ritoApp'));


  beforeEach(inject(function($rootScope, $controller, _$httpBackend_) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_; // not used yet
    ChampionsController = $controller('MatchHistoryController', {
      '$scope': scope
    });
  }));

  it('should have summonerIdInput as blank', function() {
    expect(scope.summonerNameInput).toEqual('');
  });

});
