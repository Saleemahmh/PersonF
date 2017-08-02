/**
 * 
 */
var app = angular.module('myApp', [ 'ngRoute', 'ngCookies' ]);

console.log('----Starting app.js')
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'p_pages/home.html',
	}).when('/add', {
		templateUrl : 'p_pages/add.html',
		controller : 'personController'
	}).when('/editStudentpd', {
		templateUrl : 'e_personal/editStudentpd.html',
		controller : 'editController'
		})

	.otherwise({
		redirectTo : '/'
	})
});