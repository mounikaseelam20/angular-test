'use strict';
/**
 * @ngdoc function
 * @name test3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the test3App
 */
angular.module('test3App')
    .filter('greetings', function() {
        return function(user) {
            return "Hello  " + user;
        };
    });