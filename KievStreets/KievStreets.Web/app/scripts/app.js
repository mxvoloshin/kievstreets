(function () {
    'use strict';

    //var directives = angular.module('app.directives', []);
    //var controllers = angular.module('app.controllers', []);
    //var services = angular.module('app.services', []);

    var app = angular.module('app', ['ui.router']);


    app.config(
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/views/about.html'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'app/views/about.html'
                });
        });
})();