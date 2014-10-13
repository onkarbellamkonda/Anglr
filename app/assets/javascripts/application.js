// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require underscore
//= require bootstrap-sprockets
//= require angular
//= require angular-route

//= require_self
//= require_tree ./services/global
//= require_tree ./services/main
//= require_tree ./filters/global
//= require_tree ./filters/main
//= require_tree ./controllers/global
//= require_tree ./controllers/main
//= require_tree ./directives/global
//= require_tree ./directives/main


// var app = angular.module('app',[]);
// app.controller("IndexCtrl", function($scope) {
// });
// [
//     // you'll use this space later, for stuff like ngRoute and ngResource,
// ]);


// app.config([
//   '$routeProvider', function($routeProvider) {
//     $routeProvider.when('/post', {
//       templateUrl: '../templates/post/postIndex.html',
//       controller: 'PostCtrl'
//     });
//     return $routeProvider.otherwise({
//       templateUrl: '../templates/home/mainIndex.html',
//       controller: 'IndexCtrl'
//     });
//   }
// ]);

var app = angular.module('app', ['ngRoute']);
app.config([
  '$routeProvider', function($routeProvider) {
    $routeProvider.when('/post', {
      templateUrl: './templates/post/postIndex.html',
      controller: 'PostCtrl'
    });
    return $routeProvider.otherwise({
      templateUrl: '../mainIndex.html',
      controller: 'IndexCtrl'
    });
  }
]);