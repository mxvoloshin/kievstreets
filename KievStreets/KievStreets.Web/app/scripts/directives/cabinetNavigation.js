angular.module('app.directives')
    .directive('cabinetNavigation', function () {
        return {
            restrict: 'AE',
            templateUrl: 'app/views/directives/cabinetNavigation.html',
            transclude: true
        };
    })