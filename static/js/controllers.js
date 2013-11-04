APP.controller('scheduleCtrl', function ($scope, $http, services) {
	services.getSchedule(function (data) {
		$scope.schedules = data.objects;
		console.log(data.objects);
	});
});

APP.controller('poolCtrl', function ($scope, $http, services) {
	services.getPool(function (data) {
		$scope.pools = data.objects;
		console.log(data.objects);
	});
});

APP.controller('gameCtrl', function ($scope, $http, services) {
	services.getGame(function (data) {
		$scope.games = data.objects;
		console.log(data.objects);
	});
});

APP.controller('setScoreCtrl', function ($scope, $http, $routeParams, services) {
	console.log($routeParams.id);
	services.getById($routeParams.id, function (game) {
		$scope.game = game;
	}); 

	$scope.submit = function () {
		var object = this.game;
		object['game_id'] = $routeParams.id;
		console.log(this.game);

		services.setGameScore(this.game, function () {
			console.log("Posted!");
			document.getElementById('alert').style.display = "block";
		})
	};
});