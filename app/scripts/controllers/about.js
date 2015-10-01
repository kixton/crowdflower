'use strict';

/**
 * @ngdoc function
 * @name crowdflowerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the crowdflowerApp
 */
angular.module('crowdflowerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
