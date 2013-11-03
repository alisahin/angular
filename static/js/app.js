/*
	TournamentID: 19389
	PoolID: 19219
*/

// namespace
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
			$http.get('https://api.leaguevine.com/v1/games/?tournament_id=19389&pool_id=19219&fields=%5Bpool%2C%20id%2C%20team_1%2C%20team_1_score%2C%20team_2%2C%20team_2_score%5D').success(callback);
		},
		getById: function (id, callback) {
			$http.get('https://api.leaguevine.com/v1/games/' + id + '/?{}').success(callback);
		},
		setGameScore: function (game, callback) {
			var accessToken = '82996312dc';
			$http.post('https://api.leaguevine.com/v1/game_scores/?access_token=' + accessToken + '?callback?', game, {
				headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'bearer ' + accessToken}
			}).success(callback);
		}	
	}
})


/**
 * Use the factories in your controllers
 */
APP.controller('scheduleCtrl', function ($scope, $http, services) {
	services.getSchedule(function (data) {
		$scope.schedules = data.objects;
		console.log(data.objects);
	})
})

APP.controller('poolCtrl', function ($scope, $http, services) {
	services.getPool(function (data) {
		$scope.pools = data.objects;
		console.log(data.objects);
	})
})

APP.controller('gameCtrl', function ($scope, $http, services) {
	services.getGame(function (data) {
		$scope.games = data.objects;
		console.log(data.objects);
	})
})

APP.controller('setScoreCtrl', function ($scope, $http, $routeParams, services) {
	// console.log($routeParams.id);
	services.getById($routeParams.id, function (game) {
		$scope.game = game;
	}) 

	$scope.submit = function () {
		console.log(this.game);
		services.setGameScore(this.game, function () {
			// $scope.flash = "success";
			console.log("Gelukt!");
		})
	}
})