'use strict';

/**
 * @ngdoc overview
 * @name hondacarsalesjourneyApp
 * @description
 * # hondacarsalesjourneyApp
 *
 * Main module of the application.
 */
angular
  .module('hondacarsalesjourneyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('/about',{
        url:'/about',
        templateUrl:'views/about.html',
        controller:'AboutCtrl'
      });
  });
