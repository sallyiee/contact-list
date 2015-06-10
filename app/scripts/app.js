'use strict';

angular
  .module('contactListApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
      .otherwise({
        redirectTo: '/'
      });
  }).directive('contact', function() {
  return {
    restrict: 'A',
    link:function($scope){
      // $scope.toggle = false;

      angular.element(document).ready(function () {
        $scope.toggled = function() {
          $('.user__list-list , #user__list-search').toggle();
        };
      });
    },
    templateUrl: 'views/contact-list.html',
    controllerAs: 'contactListCtrl',
    controller: function($scope, $http){
      $http.get('https://api.myjson.com/bins/pv44').success(function(data){
        $scope.users = data.user;
      });
    }
  };
});
