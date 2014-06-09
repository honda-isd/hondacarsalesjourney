'use strict';

/**
 * @ngdoc function
 * @name hondacarsalesjourneyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hondacarsalesjourneyApp
 */
angular.module('hondacarsalesjourneyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.carModels = [
      { 'name':'Accord',
        'image':'accordThumb.png',
        'type': 'Saloon',
        'route': '/accord'
      },
      {
        'name':'Civic',
        'image':'civicThumb.png',
        'type': 'Saloon',
        'route': '/civic'
      },
      {
        'name':'Crv',
        'image':'crvThumb.png',
        'type': 'SUV',
        'route': '/crv'
      },
      {
        'name':'crz',
        'image':'crzThumb.png',
        'type': 'Trendy',
        'route': '/crz'

      },
      {
        'name':'Insight',
        'image':'insightThumb.png',
        'type': 'Saloon',
        'route':'/insight'
      },
      {
        'name':'Jazz',
        'image':'jazzThumb.png',
        'type': 'Family',
        'route': '/jazz'
      }
    ];
  });
