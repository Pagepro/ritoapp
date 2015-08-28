ritoApp.controller('MatchHistoryController', [
  '$scope',
  '$stateParams',
  'MatchHistoryService',
  function ($scope, $stateParams, MatchHistoryService) {

    $scope.matchHistoryData = null;
    $scope.getMatchHistoryData = function MHC_getMatchHistoryData () {
      var summonerId = $stateParams.summonerId;

      $scope.matchHistoryData = MatchHistoryService.getMatchHistory($stateParams.summonerId);

    }
    $scope.getMatchHistoryData();
  }
]);
