'use strict';

ritoApp.factory('MatchHistoryFactory', [
  '$http',
  '$q',
  'EnvironmentService',
  function ($http, $q, Env) {
    var getMatchHistory = function MHF_getMatchHistory (summonerId) {
      $http({
        method: 'get',
        url: Env.domainName + '/' + Env.serverLocalisation + '/v2.2/matchhistory/' + summonerId + '?api_key=' + Env.apiKey
      })
      .success(function (data) {
        return data;
      })
      .error(function (data, status) {
        console.error(status);
      });
    }
    return {
      getMatchHistory: getMatchHistory
    }
  }
]);
