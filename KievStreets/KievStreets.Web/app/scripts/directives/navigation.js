angular.module('app.directives')
    .directive('navigation', function () {
    return {
        restrict: 'AE',
        templateUrl: 'app/views/directives/navigation.html',
        transclude: true
    };
})