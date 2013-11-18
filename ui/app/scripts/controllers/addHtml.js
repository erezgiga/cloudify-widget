'use strict';

angular.module('widgetApp')
    .controller('AddhtmlCtrl', function ($scope, $location, widgetService) {
        $scope.html = '';

        $scope.htmlSubmitClick = function() {
            if ($scope.isHTMLEmpty()) {
                return;
            }

            var data = widgetService.getCatalogData();
            data.html = $scope.html;
            widgetService.setCatalogData(data);
            widgetService.sendCatalogData();
        };

        $scope.previewClick = function() {
            if ($scope.isHTMLEmpty()) {
                return;
            }

            console.log('preview');
        };

        $scope.backClick = function() {
            $location.url('/');
        };

        $scope.isHTMLEmpty = function() {
            return $scope.html.length === 0;
        };
    });
