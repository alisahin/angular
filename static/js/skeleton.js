// Namespace
var APP = APP || {};

(function () {
	'use strict'

	// Data objects
	APP.schedule = {
		title:'Schedule',
		description:'Pool A - Schedule',
		items: [
			{ date: "Monday, 9:00am", team1: "Chasing", team1Score: "13", team2: "Amsterdam Money Gang", team2Score: "9"},
		    { date: "Monday, 9:00am", team1: "Boomsquad", team1Score: "15", team2: "Beast Amsterdam", team2Score: "11"},
		    { date: "Monday, 10:00am", team1: "Beast Amsterdam", team1Score: "14", team2: "Amsterdam Money Gang", team2Score: "12"},
		    { date: "Monday, 10:00am", team1: "Chasing", team1Score: "5", team2: "Burning Snow", team2Score: "15"},
		    { date: "Monday, 11:00am", team1: "Boomsquad", team1Score: "11", team2: "Amsterdam Money Gang", team2Score: "15"},    
		    { date: "Monday, 11:00am", team1: "Burning Snow", team1Score: "15", team2: "Beast Amsterdam", team2Score: "6"},
		    { date: "Monday, 12:00pm", team1: "Chasing", team1Score: "8", team2: "Beast Amsterdam", team2Score: "15"},
		    { date: "Monday, 12:00pm", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"},
		    { date: "Monday, 1:00pm", team1: "Chasing", team1Score: "15", team2: "Boomsquad", team2Score: "14"},
		    { date: "Monday, 1:00pm", team1: "Burning Snow", team1Score: "15", team2: "Amsterdam Money Gang", team2Score: "11"}
		]
	};

	APP.game = {
		title:'Game',
		description:'Pool A - Score: Boomsquad vs. Burning Snow',
		items: [
			{ score: "1", team1: "Boomsquad", team1Score: "1", team2: "Burning Snow", team2Score: "0"},
		    { score: "2", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "0"},
		    { score: "3", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "1"},
		    { score: "4", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "2"},
		    { score: "5", team1: "Boomsquad", team1Score: "3", team2: "Burning Snow", team2Score: "2"},
		    { score: "6", team1: "Boomsquad", team1Score: "4", team2: "Burning Snow", team2Score: "2"},
		    { score: "7", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "2"},
		    { score: "8", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "3"},
		    { score: "9", team1: "Boomsquad", team1Score: "6", team2: "Burning Snow", team2Score: "3"},
		    { score: "10", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "3"},
		    { score: "11", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "4"},
		    { score: "12", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "4"},
		    { score: "13", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "5"},
		    { score: "14", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "6"},
		    { score: "15", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "6"},
		    { score: "16", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "7"},
		    { score: "17", team1: "Boomsquad", team1Score: "10", team2: "Burning Snow", team2Score: "7"},
		    { score: "18", team1: "Boomsquad", team1Score: "11", team2: "Burning Snow", team2Score: "7"},
		    { score: "19", team1: "Boomsquad", team1Score: "12", team2: "Burning Snow", team2Score: "7"},
		    { score: "20", team1: "Boomsquad", team1Score: "13", team2: "Burning Snow", team2Score: "7"},
		    { score: "21", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "7"},
		    { score: "22", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "8"},
		    { score: "23", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"}
		],
		winner: [
			{ team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"}
		]
	};

	APP.ranking = {
		title:'Ranking',
		description:'Pool A - Ranking',
		items: [
			{ team: "Chasing", win: "2", lost: "2", sw: "7", sl: "9", pw: "35", pl: "39", ratio: "-4"}, 
		    { team: "Boomsquad", win: "2", lost: "2", sw: "9", sl: "8", pw: "36", pl: "34" , ratio: "-2"},
		    { team: "Burning Snow", win: "3", lost: "1", sw: "11", sl: "4", pw: "36", pl: "23" , ratio: "+13"},
		    { team: "Beast Amsterdam", win: "2", lost: "2", sw: "6", sl: "8", pw: "30", pl: "34" , ratio: "-6"},
		    { team: "Amsterdam Money Gang", win: "1", lost: "3", sw: "6", sl: "10", pw: "30", pl: "37" , ratio: "-7"}
		]
	};


	$$.ajax({
	    type: 'GET', // defaults to 'GET'
	    url: 'http://dennistel.nl/movies',
	    dataType: 'json', //'json', 'xml', 'html', or 'text'
	    async: true,
	    success: function(response) {
	    	var target = $$('section').attr('data-route', route),
	    		header = target.children('header')[0],
	    		table = target.children('table')[0];

	    		Transparency.render('header', response.Objects[0]);
	    		Transparency.render('table', response.Objects);
	    },
	    error: function(xhr, type) { 
	    	console.log(error);
	    }
	});

	APP.movies = {
		// console.log(response);
	}
	
	// Controller Init
	APP.controller = {
		init: function () {
			// Initialize router
			APP.router.init();
		}
	};

	// Router
	APP.router = {
		init: function () {
	  		routie({
			    '/schedule': function() {
			    	APP.page.render('schedule');
				},
			    '/game': function() {
			    	APP.page.render('game');
			    },

			    '/ranking': function() {
			    	APP.page.render('ranking');
			    },
			    '/movies': function() {
			    	APP.page.render('movies');
			    }, 
			    '*': function() {
			    	APP.page.render('schedule');
			    }
			});
		},

		change: function () {
            var route = window.location.hash.slice(2),
            	sections = Sizzle('section'),
                section = Sizzle('[data-route=' + route + ']')[0];

            // Show active section, hide all other
            if (section) {
            	for (var i=0; i < sections.length; i++){
            		sections[i].classList.remove('active');
            	}
            	section.classList.add('active');
            }

            // Default route
            if (!route) {
            	sections[0].classList.add('active');
            }

		}
	};

	// Pages
	APP.page = {
		render: function (route) {
			window.location.hash.slice(2)
			// http://javascriptweblog.wordpress.com/2010/04/19/how-evil-is-eval/
			var data = eval('APP.'+route); // route = closure

			Transparency.render(Sizzle('[data-route='+route+']')[0], data);
			// Transparency.render($$('section').attr('data-route', route), data);
			APP.router.change();
		}
	}
	// DOM ready
	domready(function () {
		// Kickstart application
		APP.controller.init();
	});
	
})();