'use strict';

angular.module('ngMockTestApp')
  .controller('MainCtrl', ['$scope', 'JsonData', function ($scope, JsonData) {

    JsonData.getSampleData().then(function(res){

      $scope.items = res.data;

    });

  }])
;
