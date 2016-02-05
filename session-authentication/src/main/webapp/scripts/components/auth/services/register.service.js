'use strict';

angular.module('baseApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


