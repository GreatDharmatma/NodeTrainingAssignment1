var path = require('path'),
	session = require('express-session'),
	expressions = require('angular-expressions');

module.exports = function(app) {
	app.get('/', function (req, res) {
		var loggedin = false;
		if( req.session.loggedin ) {
			loggedin = true;
		}
		res.render('index',
			{ title : 'Home', loggedin: loggedin }
		);
	});
	app.get('/about', function(req, res){
		var loggedin = false;
		if( req.session.loggedin ) {
			loggedin = true;
		}
		res.render('about',
			{ title : 'About Us', loggedin: loggedin }
		);
	});

	app.get('/login', function(req, res){
		var err = false;
		if( req.session.error ) {
			err = true;
			delete req.session.error;
		}
		res.render('login',
			{ title : 'Login', error: err }
		);
	});

	app.get('/logout', function(req, res){
		delete req.session.loggedin;
		res.redirect('/');
	})

	app.post('/login', function(req, res){
		var email = req.body.email;
		var password = req.body.password;
		console.log(email, password);
		if(email == 'asahasrabuddhe@torinit.com' && password == 'torinit@123') {
			req.session.loggedin = true;
			res.redirect('/welcome');
		} else {
			req.session.error = true;
			res.redirect('/login');
		}
	});

	app.get('/welcome', function(req, res){
		var loggedin = false;
		if( req.session.loggedin ) {
			loggedin = true;
		} 
		res.render('welcome',
			{ title : 'Welcome', loggedin: loggedin }
		);
	});

	app.get('/calculator', function(req, res){
		var loggedin = false;
		if( req.session.loggedin ) {
			loggedin = true;
		} 
		res.render('calculator',
			{ title : 'Expression Calculator', loggedin: loggedin }
		);
	});

	app.post('/evaluate', function(req, res){
		var exp = req.body.expression;
		console.log(exp);
		var evaluate = expressions.compile(exp);
		res.send(200,evaluate());
	});
}