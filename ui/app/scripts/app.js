'use strict';

angular.module('widgetApp', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/addHtml', {
                templateUrl: 'views/addHtml.html',
                controller: 'AddhtmlCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
