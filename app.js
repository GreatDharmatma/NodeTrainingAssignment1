var express = require('express')
	session = require('express-session'),
	path = require('path'),
	bodyParser = require('body-parser'),
	app = express();

app.use(session({ secret: 'ajitem torinit 123', resave : true,  saveUninitialized : false }));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

app.set('public', path.join(__dirname, '/public'));
app.use('/public', express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var router = require('./routes/routes.js')(app);

var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log('Application started on port 3000');
});