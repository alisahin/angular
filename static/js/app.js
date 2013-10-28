/*
	TournamentID: 19389
	PoolID: 19219
*/

// Changed namespace to uppercase
var APP = angular.module('APP', []);

APP.config(function ($routeProvider) {
	$routeProvider
		.when('/schedule',
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
		.when('/gameUpdate',
		{
			templateUrl: "view/gameUpdate.html",
			controller: "gameUpdateCtrl"
		})
		.otherwise({
			redirectTo: '/'
		})
})

APP.factory('services', function ($http) {
	return {
		getSchedule: function (callback) {
			$http.get('https://api.leaguevine.com/v1/game_scores/?tournament_id=19389').success(callback);
		},
		getPool: function (callback) {
			$http.get('https://api.leaguevine.com/v1/pools/?pool_ids=%5B19219%5D&tournament_id=19389&fields=%5Bname%2C%20standings%5D').success(callback);
		},
		getGame: function (callback) {
			$http.get('https://api.leaguevine.com/v1/games/?tournament_id=19389&pool_id=19219&fields=%5Bpool%2C%20team_1%2C%20team_1_score%2C%20team_2%2C%20team_2_score%20%5D').success(callback);
		},
		setGameScore: function (callback) {
			/**
			 * Check https://github.com/Tamp/FED2/blob/master/APP/static/js/services.js to create your post request
			 */
		}
	}
})


/**
 * Use the factories in your controllers
 */
APP.controller('scheduleCtrl', function ($scope, $http, services) {
  services.getSchedule(function (data) {
  	$scope.schedules = data.objects;
  })
})

APP.controller('poolCtrl', function ($scope, $http) {
  $http.get('https://api.leaguevine.com/v1/pools/?pool_ids=%5B19219%5D&tournament_id=19389&fields=%5Bname%2C%20standings%5D').success(function(data) {
    $scope.pools = data.objects;
    console.log(data.objects);
  })
})

APP.controller('gameCtrl', function ($scope, $http) {
  $http.get('https://api.leaguevine.com/v1/games/?tournament_id=19389&pool_id=19219&fields=%5Bpool%2C%20team_1%2C%20team_1_score%2C%20team_2%2C%20team_2_score%20%5D').success(function(data) {
    $scope.games = data.objects;
    console.log(data.objects);
  })
})

APP.controller('gameUpdateCtrl', function ($scope, $http) {
  $http.post('/someUrl', data).success(successCallback);
    $scope.games = data.objects;
    console.log(data.objects);
})
