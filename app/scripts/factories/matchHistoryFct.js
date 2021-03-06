'use strict';

ritoApp.factory('MatchHistoryFactory', [
  '$http',
  '$q',
  'EnvironmentService',
  function ($http, $q, Env) {

    var getMatchHistory = function MHF_getMatchHistory (summonerId) {
      var deferred = $q.defer();
      $http({
        method: 'get',
        url: Env.domainName + '/' + Env.serverLocalisation + '/v2.2/matchhistory/' + summonerId + '?api_key=' + Env.apiKey
      })
      .success(function (data) {
        deferred.resolve(data);
        return data;
      })
      .error(function (data, status) {
        deferred.reject(status);
        return status;
      });
      return deferred.promise;
    }

    return {
      getMatchHistory: getMatchHistory
    }
  }
]);
