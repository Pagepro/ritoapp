ritoApp.controller('MatchHistoryController', [
  '$scope',
  '$stateParams',
  'MatchHistoryService',
  'SummonerService',
  function ($scope, $stateParams, MatchHistoryService, SummonerService) {

    $scope.matchHistoryData = undefined;
    $scope.summonerNameInput = '';

    $scope.getSummonerByName = function MHC_testFun () {
      var name = $scope.summonerNameInput;
      SummonerService.getSummonerByName(name).then(function (data) {
        $scope.getMatchHistoryData(data[name].id);
      }, function (status) {
        console.error(status);
      })
    }

    $scope.getMatchHistoryData = function MHC_getMatchHistoryData (summonerId) {

      MatchHistoryService.getMatchHistory(summonerId).then(function (data) {
        $scope.matchHistoryData = data;
        console.info(data.matches);
      }, function (status) {
        console.error(status);
      });

    }
    // TODO change gathering ID from stateParams to controller's model
  }
]);
