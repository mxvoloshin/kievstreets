angular.module('app.directives')
    .directive('email', function () {
        return {
            restrict: 'AE',
            templateUrl: '../../../app/views/directives/auth/email.html',
            scope: {
                formName: '=',
                data: '='
            },
            controller: function ($rootScope, $scope) {
                $scope.regex = $rootScope.regex;
            }            
        };
    });