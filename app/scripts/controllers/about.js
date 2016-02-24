'use strict';

/**
 * @ngdoc function
 * @name test3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the test3App
 */
angular.module('test3App')
    .controller('AboutCtrl', function($scope, $state, loginservice, $rootScope) {
        $scope.username = '';
        $rootScope.showhideprop = false;
        $scope.changeState = function() {
            $scope.un = loginservice.setProperty($scope.username);
            $state.go('/dashboard');
            $rootScope.showhideprop = true;
        };
    });