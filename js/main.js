var app = angular.module('mdbApp', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider
	.when("/modify", {
		templateUrl: "sections/modify.html"
	})
	.when("/operators", {
		templateUrl: "sections/operators.html"
	})
	.when("/return-criteria", {
		templateUrl: "sections/return-criteria.html"
	})
	.otherwise({
		redirectTo: '/'
	});
});