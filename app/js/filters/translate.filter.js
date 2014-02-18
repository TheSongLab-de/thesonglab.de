angular.module('theSongLab-app').
  filter('translate', function(languageService,nn) {
    return function(input) {
        console.log('hello world!');
        return nn(languageService.current())(input).val;
    }
  });