'use strict';

/**
 * @ngdoc overview
 * @name test3App
 * @description
 * # test3App
 *
 * Main module of the application.
 */
var app = angular
    .module('test3App', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ]);
app.config(function($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/home');
    $stateProvider

    // HOME page========================================
        .state('/home', {
        url: '/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })

    // loginPAGE  =================================
    .state('/login', {
            // we'll get to this in a bit 
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'AboutCtrl'
        })
        // dashboard  =================================
        .state('/dashboard', {
            // we'll get to this in a bit 
            url: '/dashboard',
            templateUrl: 'views/dashboard.html',
            controller: 'dashboardCtrl'
        });
});
app.controller('homeCtrl', function($scope, loginservice, $state, $rootScope) {
    $scope.fnC = function() {
        $scope.un2 = loginservice.getProperty();
    };
    $scope.changeState1 = function() {
        $state.go('/home');
        $rootScope.showhideprop = false;
        $scope.username = "";
    };
});