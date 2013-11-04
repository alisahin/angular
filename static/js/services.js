/*
	TournamentID: 19389
	PoolID: 19219
*/

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
			var accessToken = '7c1a981550';
			$http.post('https://api.leaguevine.com/v1/game_scores/?access_token=' + accessToken + '?callback?', game, {
				headers: {'Authorization': 'bearer ' + accessToken}
			}).success(callback);
		}	
	}
});