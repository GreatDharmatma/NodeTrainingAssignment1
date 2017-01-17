var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	app = express();

app.use('/', express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/about', function(req, res){
	res.sendFile(path.join(__dirname, '/public/about.html'));
});

app.get('/login', function(req, res){
	res.sendFile(path.join(__dirname, '/public/login.html'));
});

app.get('/logout', function(req, res){
	res.redirect('/');
})

app.post('/login', function(req, res){
	var email = req.body.email;
	var password = req.body.password;
	console.log(email, password);
	if(email == 'asahasrabuddhe@torinit.com' && password == 'torinit@123') {
		res.redirect('/welcome');
	} else {
		res.sendFile(path.join(__dirname, '/public/loginfailed.html'));
	}
});

app.get('/welcome', function(req, res){
	res.sendFile(path.join(__dirname, '/public/welcome.html'));
});

app.get('/calculator', function(req, res){
	res.sendFile(path.join(__dirname, '/public/calculator.html'));
})

app.listen(3000, function(){
	console.log('Application started on port 3000');
});