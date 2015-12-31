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
	.when("/arrays", {
		templateUrl: "sections/arrays.html"
	})
	.when("/cursors", {
		templateUrl: "sections/cursors.html"
	})
	.when("/explain-hint", {
		templateUrl: "sections/explain-hint.html"
	})
	.otherwise({
		redirectTo: '/'
	});
});