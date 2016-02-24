'use strict';

/**
 * @ngdoc function
 * @name test3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test3App
 */
angular.module('test3App')
    .controller('dashboardCtrl', function($scope, loginservice, $rootScope) {
         $scope.un1=loginservice.getProperty();
         console.log($scope.un1);
    });