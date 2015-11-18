'use strict';

/**
 * @ngdoc overview
 * @name webadminApp
 * @description
 * # webadminApp
 *
 * Main module of the application.
 */
const routeApp = 'routeApp';
angular
  .module(routeApp, [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'datatables'
  ])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html'
      })
      .when('/login', {
        templateUrl: 'views/login/login.html'
      })
      .when('/category', {
        templateUrl: 'views/category/category.html'
      })
      .when('/addcategory', {
        templateUrl: 'views/addCategory/addcategory.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
