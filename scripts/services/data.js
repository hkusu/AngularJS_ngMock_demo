'use strict';

angular.module('ngMockTestApp')
  .factory('JsonData', function ($http) {

    return {

      getSampleData: function () {

        return $http.get('data/sample.json?hoge=1')

          .success(function(data, status, headers, config) {

            return data;

          });

      }

    }

  })
;
