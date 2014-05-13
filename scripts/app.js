'use strict';

angular.module('ngMockTestApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngMockE2E'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .run(['$httpBackend', function ($httpBackend) {

    $httpBackend.whenGET(/^views\//).passThrough();

    var sample = [
      {
        "id": "1",
        "name": "山田"
      },
      {
        "id": "2",
        "name": "鈴木"
      }
    ];

    $httpBackend.whenGET('data/sample.json?hoge=1').respond(200, sample, {});

    $httpBackend.whenGET('data/sample.json?hoge=2').respond(function(method, url, data, headers) {
            return [200, sample, {}];
    });

  }])
;