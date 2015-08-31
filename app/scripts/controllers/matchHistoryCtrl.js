ritoApp.controller('MatchHistoryController', [
  '$scope',
  '$stateParams',
  'MatchHistoryService',
  function ($scope, $stateParams, MatchHistoryService) {

    $scope.matchHistoryData = null;
    $scope.summonerIdInput = '';
    var summonerId = $stateParams.summonerId;
    $scope.getMatchHistoryData = function MHC_getMatchHistoryData () {

      $scope.matchHistoryData = MatchHistoryService.getMatchHistory($stateParams.summonerId);

    }
    // TODO change gathering ID from stateParams to controller's model
    if (summonerId) {
      $scope.getMatchHistoryData();
    } else {
      console.log('no ID');
    }
  }
]);
