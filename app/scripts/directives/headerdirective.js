'use strict';
var app = angular.module("test3App");
app.directive("headerDirective", function() {
    return {
        templateUrl: "views/header.html"
    };
});
