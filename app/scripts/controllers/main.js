'use strict';

/**
 * @ngdoc function
 * @name test3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test3App
 */
angular.module('test3App')
    .controller('MainCtrl', function($scope, $state) {
        $scope.changeState = function() {
            $state.go('/login');
        };
    });