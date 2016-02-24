'use strict';

angular.module('test3App')
    .service('loginservice', function() {
        var user = '';
        return {
            setProperty: function(value) {
                user = value;
            },
            getProperty: function() {
                return user;
            }
        };
    });