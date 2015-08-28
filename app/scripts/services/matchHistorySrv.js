'use strict';

ritoApp.service('MatchHistoryService', [
  'MatchHistoryFactory',
  function (MatchHistoryFactory) {
    this.getMatchHistory = function MHS_getMatchHistory (summonerId) {
      return MatchHistoryFactory.getMatchHistory(summonerId)
    }
  }
]);
