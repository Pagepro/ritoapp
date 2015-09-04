'use strict';

ritoApp.service('MatchHistoryService', [
  '$q',
  'MatchHistoryFactory',
  function ($q, MatchHistoryFactory) {
    var getMatchHistory = function MHS_getMatchHistory (summonerId) {
      var deferred = $q.defer();
      MatchHistoryFactory.getMatchHistory(summonerId).then(function (data) {
        deferred.resolve(data);
        return data;
      }, function (data) {
        deferred.reject(data);
        return status;
      });
      return deferred.promise;
    }

    return {
      getMatchHistory: getMatchHistory
    }
  }
]);
