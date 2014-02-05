var pableteApp = angular.module('pableteApp', [
  'ngRoute',
  'pableteControllers'
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
        templateUrl: 'partials/producer.html',
        controller: 'ProducerCtl'
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtl'
      }).
      when('/recordings', {
        templateUrl: 'partials/recordings.html',
        controller: 'RecordingsCtl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);