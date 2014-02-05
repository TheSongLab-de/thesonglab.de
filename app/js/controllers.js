var pableteControllers = angular.module('pableteControllers', []);
 
 var currentLang=function(){
  		return {
  			nav:{
  				about: "About",
  				teacher: "Der Lehrer",
  				artist:"Der Musiker",
  				producer:"Musikproduktion",
  				languages: "Sprachen"
  			},
        menu:{
          teacher:{
            title:"Der Lehrer",
            button:"Lehrnen",
            text:"Ziel ist es, nicht nur eine neue Sprache zu erlernen, sondern sich in dieser Sprache auszudrücken und unterhalten zu können und eigenen Ideen zu entwickeln. Lass dich von meiner Freude für die Musik anstecken!"
          },
          producer:{
            title:"Musikproduktion",
            button:"Kreieren",
            text:"Die Musik und ihre beiden in sich verschlungen Kreise: Die Musik als künstlerischer Ausdruck und als fertiges und funktionales Produkt. Sich zwischen diesen beiden Welten ohne Komplexe zu bewegen, ist wichtig, wenn es darum geht, eine Idee zu realisieren und fertig zu stellen. Ich helfe dir dabei, deinen Sound zu finden!"
          },
          artist:{
            title:"Der Musiker",
            button:"Anhören",
            text:"Die Musik und ihre beiden in sich verschlungen Kreise: Die Musik als künstlerischer Ausdruck und als fertiges und funktionales Produkt. Sich zwischen diesen beiden Welten ohne Komplexe zu bewegen, ist wichtig, wenn es darum geht, eine Idee zu realisieren und fertig zu stellen. Ich helfe dir dabei, deinen Sound zu finden!"
          },
        },
  			news:[
  				{
  					title:"Student's material available.",
  					content:"Students get access to my private section for complimentary material to help them practice for their lessons.",
  					button:"Login!",
  					img:"http://upload.wikimedia.org/wikipedia/commons/9/99/Berlin_Skyline_voll.jpg",
  					href:"#/login"
  				},
  				{
  					title:"Live from munich.",
  					content:"Come on and hear me out live at the <code>Westin</code> hotel next monday.",
  					button:"Join the tour",
  					img:"http://techmeetups.com/wp-content/uploads/2012/12/Berlin.jpg",
  					href:"#/live"
  				},
  				{
  					title:"Read my blog.",
  					content:"I won't lie. I like more the other kind of keyboard. But sometimes I leave some writtings for posterity on my personal sight experience with music",
  					button:"See what you got!",
  					img:"https://www.creameryschoolofmusic.com/template/upload_images/Guitar-guitar-10566054-1920-1200.jpg",
  					href:"#/blog"
  				}
  			]
  		};
  	};


pableteControllers.controller('HomeCtl', ['$scope', '$http',
  function ($scope, $http) {
  	$scope.currentLang=currentLang;
  }]);
pableteControllers.controller('NavBarCtl', ['$scope', '$http',
  function ($scope, $http) {
  	$scope.currentLang=currentLang;
  }]);

 
pableteControllers.controller('TeacherCtl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);
 
pableteControllers.controller('ArtistCtl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);
 
pableteControllers.controller('ProducerCtl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);
 
pableteControllers.controller('AboutCtl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);
 
pableteControllers.controller('RecordingsCtl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);

