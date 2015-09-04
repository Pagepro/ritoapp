'use strict';

ritoApp.service('SummonerService', [
  '$q',
  'SummonerFactory',
  function ($q, SummonerFactory) {

    var getSummonerByName = function SF_getSummonerByName (summonerName) {
      var deferred = $q.defer();
      SummonerFactory.getSummonerByName(summonerName).then(function (data) {
        deferred.resolve(data);
        return data;
      }, function (data) {
        deferred.reject(data);
        return status;
      });
      return deferred.promise;
    }

    return {
      getSummonerByName: getSummonerByName
    }
  }
]);
