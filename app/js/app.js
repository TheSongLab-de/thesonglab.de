

var pableteApp = angular.module('theSongLab-app', [
  'ngRoute',
  'angular-carousel'
]);
 
pableteApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtl'
      }).
      when('/teacher', {
        templateUrl: 'partials/teacher.html',
        controller: 'TeacherCtl'
      }).
      when('/artist', {
        templateUrl: 'partials/artist.html',
        controller: 'ArtistCtl'
      }).
      when('/producer', {
        templateUrl: 'partials/wip.html',
        controller: 'WipCtl'
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtl'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactCtl'
      }).
      when('/recordings', {
        templateUrl: 'partials/wip.html',
        controller: 'WipCtl'
//        templateUrl: 'partials/recordings.html',
//        controller: 'RecordingsCtl'
      }).
      when('/wip', {
        templateUrl: 'partials/wip.html',
        controller: 'WipCtl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

require.config({
    baseUrl: "/js",
    paths: {
        "nevernull": "lib/nn-0.0.6.min"
    }
  });