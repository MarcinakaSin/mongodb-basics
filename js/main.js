var app = angular.module('mdbApp', [])
	.config(function($routeProvider, $locationProvider){
		$locationProvider.html5Mode(true);

		$routeProvider.when("/", {templateUrl: "/sections/modify.html"});
	});