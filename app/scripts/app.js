'use strict';

/**
 * @ngdoc overview
 * @name pdddemoApp
 * @description
 * # pdddemoApp
 *
 * Main module of the application.
 */
angular
    .module('pdddemoApp', [
        'ngRoute',
        'blndspt.ngPerformance',
        'pasvaz.bindonce',
		'dateUtilsModule',
		'datepickerModule',
		'calendarModule',
        'angularUtils.directives.dirPagination'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/demo', {
                templateUrl: 'views/demo.html',
                controller: 'DemoCtrl'
            })
            .when('/checkout', {
                templateUrl: 'views/checkout.html',
                controller: 'CheckoutCtrl'
            })
            .when('/step-1', {
                templateUrl: 'views/step-1.html',
                controller: 'CheckoutCtrl'
            })
            .when('/step-2', {
                templateUrl: 'views/step-2.html',
                controller: 'CheckoutCtrl'
            })
            .when('/step-3', {
                templateUrl: 'views/step-3.html',
                controller: 'CheckoutCtrl'
            })
            .when('/step-4', {
                templateUrl: 'views/step-4.html',
                controller: 'CheckoutCtrl'
            })
            .when('/step-5', {
                templateUrl: 'views/step-5.html',
                controller: 'CheckoutCtrl'
            })
            .when('/step-6', {
                templateUrl: 'views/step-6.html',
                controller: 'CheckoutCtrl'
            })
            .when('/step-7', {
                templateUrl: 'views/step-7.html',
                controller: 'CheckoutCtrl'
            })
            .when('/step-8', {
                templateUrl: 'views/step-8.html',
                controller: 'CheckoutCtrl'
            })
            .when('/step-9', {
                templateUrl: 'views/step-9.html',
                controller: 'CheckoutCtrl'
            })
            .when('/step-10', {
                templateUrl: 'views/step-10.html',
                controller: 'CheckoutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
