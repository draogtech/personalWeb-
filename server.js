var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');

app.use(cookieParser());
app.use(session({
   secret: 'mySecret',
   saveUninitialized: true,
   resave: true

                }));
app.use(flash());

app.use(require('connect-flash')());
app.use(function (req, res, next) {
   res.locals.messages = require('express-messages')(req, res);
   next();
});

//import and use body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var route = require("./app/routes");
app.use('/', route);

app.set('view engine', 'ejs');

//set static file (css, img, js and so on)
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, function() {
   console.log('app started, listening to port 8000');
});

