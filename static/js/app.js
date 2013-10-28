/*
	TournamentID: 19389
	PoolID: 19219
*/

var app = angular.module('app', []);

app.config(function ($routeProvider) {
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

app.controller('scheduleCtrl', function AppCtrl($scope, $http) {
  $http.get('https://api.leaguevine.com/v1/game_scores/?tournament_id=19389').success(function(data) {
    $scope.schedules = data.objects;
    console.log(data.objects);
  })
})

app.controller('poolCtrl', function AppCtrl($scope, $http) {
  $http.get('https://api.leaguevine.com/v1/pools/?pool_ids=%5B19219%5D&tournament_id=19389&fields=%5Bname%2C%20standings%5D').success(function(data) {
    $scope.pools = data.objects;
    console.log(data.objects);
  })
})

app.controller('gameCtrl', function AppCtrl($scope, $http) {
  $http.get('https://api.leaguevine.com/v1/games/?tournament_id=19389&pool_id=19219&fields=%5Bpool%2C%20team_1%2C%20team_1_score%2C%20team_2%2C%20team_2_score%20%5D').success(function(data) {
    $scope.games = data.objects;
    console.log(data.objects);
  })
})

app.controller('gameUpdateCtrl', function AppCtrl($scope, $http) {
  $http.post('/someUrl', data).success(successCallback);
    $scope.games = data.objects;
    console.log(data.objects);
})



