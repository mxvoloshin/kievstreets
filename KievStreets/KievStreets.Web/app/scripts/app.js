(function () {
    'use strict';

    var directives = angular.module('app.directives', []);
    var controllers = angular.module('app.controllers', []);
    var services = angular.module('app.services', []);

    var app = angular.module('app', ['ui.router', 'app.directives', 'app.controllers', 'app.services']);


    app.config(
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '../app/views/home.html',
                    controller: 'home'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: '../app/views/about.html',

                })
                .state('login', {
                    url: '/login',
                    templateUrl: '../app/views/login.html',
                    controller: 'login'
                })
                .state('cabinet', {
                    url: '/cabinet',
                    templateUrl: '../app/views/cabinet.html',
                    controller: 'cabinet'
                })
                 .state('questions', {
                     url: '/questions',
                     templateUrl: '../app/views/questions.html',
                     controller: 'questions'
                 })
                .state('documents', {
                    url: '/documents',
                    templateUrl: '../app/views/documents.html',
                    controller: 'documents'
                })
                .state('register', {
                    url: '/register',
                    templateUrl: '../app/views/register.html',
                    controller: 'register'
                });
        });
})();