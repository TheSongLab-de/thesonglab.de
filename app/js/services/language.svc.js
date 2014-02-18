'use strict';

angular.module('theSongLab-app')
    .factory('languageService', function($http) {
        var currentLang;
        function get(lang) {
            return $http({
                url: '/languages/'+lang+'.json',
                method: 'GET'
            });
        };

        function loadLanguage(lang) {

            get(lang).success(function(newLang) {
                currentLang = newLang;
            })
        };


        return {
            get: get,
            loadLanguage: loadLanguage,
            current: function(){ return currentLang;}
        };
    });

angular.module('theSongLab-app')
    .factory('nn', function($q) {
        return window.nn;
    });


angular.module('theSongLab-app').run(function(languageService) {
    languageService.loadLanguage('de');
});