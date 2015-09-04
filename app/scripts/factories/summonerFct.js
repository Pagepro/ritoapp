'use strict';

ritoApp.factory('SummonerFactory', [
  '$http',
  '$q',
  'EnvironmentService',
  function ($http, $q, Env) {

    var getSummonerByName = function SF_getSummonerByName (summonerName) {
      var deferred = $q.defer();
      $http({
        method: 'get',
        url: Env.domainName + '/' + Env.serverLocalisation + '/v1.4/summoner/by-name/' + summonerName + '?api_key=' + Env.apiKey
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
      getSummonerByName: getSummonerByName
    }
  }
]);
