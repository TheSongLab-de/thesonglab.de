"use strict";

angular.module('theSongLab-app')
    .controller('NavBarCtl', ['$scope', 'languageService',
        function ($scope, languageService) {

            $scope.changeLang= function(lang){
                languageService.loadLanguage(lang);

            }
        }]
);
