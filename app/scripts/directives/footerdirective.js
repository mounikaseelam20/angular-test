'use strict';
var app = angular.module("test3App");
app.directive("footerDirective", function() {
    return {
        templateUrl : "views/footer.html"
    };
});