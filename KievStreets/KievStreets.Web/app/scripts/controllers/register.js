angular.module('app.controllers')
    .controller('register', function ($scope) {
        $scope.login = null;
        $scope.password = null;
        $scope.name = { first: '', middle: '', last: '' };
        $scope.email = null;
    });