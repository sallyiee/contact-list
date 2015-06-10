'use strict';

/**
 * @ngdoc function
 * @name contactListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contactListApp
 */
angular.module('contactListApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
