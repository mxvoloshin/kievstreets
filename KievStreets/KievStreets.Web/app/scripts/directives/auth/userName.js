angular.module('app.directives')
    .directive('userName', function () {
        return {
            restrict: 'AE',
            templateUrl: '../../../app/views/directives/auth/userName.html',
            scope: {
                formName: '=',
                data:'='
            },
            controller: function ($rootScope, $scope) {
                $scope.regex = $rootScope.regex;
            }
        };
    });