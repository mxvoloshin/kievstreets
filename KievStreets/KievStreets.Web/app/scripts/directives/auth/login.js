angular.module('app.directives')
    .directive('login', function () {
        return {
            restrict: 'AE',
            templateUrl: '../../../app/views/directives/auth/login.html',
            scope: {
                formName: '=',
                data: '='
            },
            controller: function ($rootScope, $scope) {
                $scope.regex = $rootScope.regex;
            }
        };
    });