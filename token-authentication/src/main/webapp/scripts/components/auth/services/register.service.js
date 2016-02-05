'use strict';

angular.module('jhipApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


