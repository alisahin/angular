/*
	TournamentID: 19389
	PoolID: 19219
*/// namespace
var APP=angular.module("APP",[]);APP.config(function(e){e.when("/",{templateUrl:"view/schedule.html",controller:"scheduleCtrl"}).when("/pool",{templateUrl:"view/pool.html",controller:"poolCtrl"}).when("/game",{templateUrl:"view/game.html",controller:"gameCtrl"}).when("/game/:id",{templateUrl:"view/set_score.html",controller:"setScoreCtrl"}).otherwise({redirectTo:"/"})});APP.factory("services",function(e){return{getSchedule:function(t){e.get("https://api.leaguevine.com/v1/game_scores/?tournament_id=19389").success(t)},getPool:function(t){e.get("https://api.leaguevine.com/v1/pools/?pool_ids=%5B19219%5D&tournament_id=19389&fields=%5Bname%2C%20standings%5D").success(t)},getGame:function(t){e.get("https://api.leaguevine.com/v1/games/?tournament_id=19389&pool_id=19219&fields=%5Bpool%2C%20id%2C%20team_1%2C%20team_1_score%2C%20team_2%2C%20team_2_score%5D").success(t)},getById:function(t,n){e.get("https://api.leaguevine.com/v1/games/"+t+"/?{}").success(n)},setGameScore:function(t,n){var r="82996312dc";e.post("https://api.leaguevine.com/v1/game_scores/?access_token="+r+"?callback?",t,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"bearer "+r}}).success(n)}}});APP.controller("scheduleCtrl",function(e,t,n){n.getSchedule(function(t){e.schedules=t.objects;console.log(t.objects)})});APP.controller("poolCtrl",function(e,t,n){n.getPool(function(t){e.pools=t.objects;console.log(t.objects)})});APP.controller("gameCtrl",function(e,t,n){n.getGame(function(t){e.games=t.objects;console.log(t.objects)})});APP.controller("setScoreCtrl",function(e,t,n,r){r.getById(n.id,function(t){e.game=t});e.submit=function(){console.log(this.game);r.setGameScore(this.game,function(){console.log("Gelukt!")})}});