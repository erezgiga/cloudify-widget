'use strict';

angular.module('widgetApp')
    .controller('MainCtrl', function ($scope, $location, widgetService) {
        $scope.availableWidgets = widgetService.getWidgetList().data;
        $scope.selectedAvailableWidgets = [];
        $scope.enabledWidgets = [];
        $scope.selectedEnabledWidgets = [];

        function init() {
            var data = widgetService.getCatalogData();
            if (data.widgets.length > 0) {
                $scope.enabledWidgets = data.widgets;
                removeSelectedWidgets($scope.availableWidgets, data.widgets);
            }
        }

        $scope.addWidget = function() {
            if ($scope.enabledWidgets.length === 0) {
                $scope.enabledWidgets = $scope.selectedAvailableWidgets;
            } else {
                $scope.enabledWidgets = $scope.enabledWidgets.concat($scope.selectedAvailableWidgets);
            }
            removeSelectedWidgets($scope.availableWidgets, $scope.selectedAvailableWidgets);
        };

        $scope.removeWidget = function() {
            if ($scope.availableWidgets.length === 0) {
                $scope.availableWidgets = $scope.selectedEnabledWidgets;
            } else {
                $scope.availableWidgets = $scope.availableWidgets.concat($scope.selectedEnabledWidgets);
            }
            removeSelectedWidgets($scope.enabledWidgets, $scope.selectedEnabledWidgets);
        };

        $scope.nextClick = function() {
            var data = widgetService.getCatalogData();
            data.widgets = $scope.enabledWidgets;

            widgetService.setCatalogData(data);
            $location.url('/addHtml');
        };

        function removeSelectedWidgets(arr1, arr2) {
            for (var i = 0; i < arr1.length; i++) {
                for (var j = 0; j < arr2.length; j++) {
                    if (arr1[i].id === arr2[j].id) {
                        arr1.splice(i, 1);
                    }
                }
            }
        }

        init();

    });
