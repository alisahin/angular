/*
	TournamentID: 19389
	PoolID: 19219
*/

// Namespace
var APP = angular.module('APP', []);

APP.config(function ($routeProvider) {
	$routeProvider
		.when('/',
		{
			templateUrl: "view/schedule.html",
			controller: "scheduleCtrl"
		})
		.when('/pool',
		{
			templateUrl: "view/pool.html",
			controller: "poolCtrl"
		})
		.when('/game',
		{
			templateUrl: "view/game.html",
			controller: "gameCtrl"
		})
		.when('/game/:id',
		{
			templateUrl: "view/set_score.html",
			controller: "setScoreCtrl"
		})
		.otherwise({
			redirectTo: '/'
		})
});