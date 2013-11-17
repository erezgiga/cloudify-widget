'use strict';

angular.module('widgetApp')
    .controller('AddhtmlCtrl', function ($scope, $location, widgetService) {
        $scope.html = '';

        $scope.htmlSubmitClick = function() {
            var data = widgetService.getCatalogData();
            data.html = $scope.html;
            widgetService.setCatalogData(data);
            widgetService.sendCatalogData();
        };

        $scope.previewClick = function() {
            console.log('preview');
        };

        $scope.backClick = function() {
            $location.url('/');
        };
    });
