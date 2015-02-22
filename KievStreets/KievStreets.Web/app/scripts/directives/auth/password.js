angular.module('app.directives')
    .directive('password', function () {
        return {
            restrict: 'AE',
            templateUrl: '../../../app/views/directives/auth/password.html',
            scope: {
                formName: '=',
                data: '='
            },
            controller: function ($rootScope, $scope) {
                $scope.regex = $rootScope.regex;
            }
        };
    });