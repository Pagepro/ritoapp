/*
[01.09.2015, 14:11:22] Paweł Kromplewski: ostra wojna byla, ale w sumie co wyniklo z niej? moj kod jest bardzo chujowy, czy WŚRÓD TYCH KURWA WIELU TEORII, jest całkiem znośny i mogę tak pisać?
[01.09.2015, 14:11:33] Dariusz 'Palid' Niemczyk: jest spoko, tylko w serwisie używasz this.
[01.09.2015, 14:11:39] David Gorczyca: wg mnie jest ok, a darek czepia się teorii
[01.09.2015, 14:11:39] Dariusz 'Palid' Niemczyk: a w faktorkach return w funkcji.
*/

'use strict';

var ritoApp = angular.module('ritoApp', [
  // 'ngMock',
  'ui.router'
])
.config(['$stateProvider',
         '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
      $stateProvider
        .state('homeState', {
          url: '/',
          templateUrl: 'partials/homePageTpl.html',
          controller: 'HomeController',
          controllerAs: 'HC'
        })
        .state('championsState', {
          url: '/champions',
          templateUrl: 'partials/championsPageTpl.html',
          controller: 'ChampionsController',
          controllerAs: 'CSC'
        })
        .state('championState', {
          url: '/champion/{championId}',
          templateUrl: 'partials/championPageTpl.html',
          controller: 'ChampionController',
          controllerAs: 'CC'
        })
        .state('matchHistory', {
          url: '/match-history',
          templateUrl: 'partials/matchHistoryPageTpl.html',
          controller: 'MatchHistoryController',
          controllerAs: 'MHC'
        })
}])
.run(['$state', '$rootScope',
  function ($state, $rootScope) {
    $state.go('homeState');
    $rootScope.communicator = {}; // used for communication between controllers
}]);
