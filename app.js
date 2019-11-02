var createError = require('http-errors');
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);

require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createRouter = require('./routes/create');
var userController = require('./controllers/userController');
var loginRouter = require('./routes/login');


var app = express();

var SECRET = process.env.SECRET
var store = new MongoDBStore({
  uri: process.env.DB,
  collection: 'sessions',

});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(session({ secret: SECRET, resave: false, saveUninitialized: false, store } ))
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride( function ( req, res) {
  if ( req.body && typeof req.body === 'object' && '_method' in req.body){
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

//app.use('/', userController.loadDefaultUser);
app.use('/users', usersRouter );
app.use('/create', createRouter );
app.use('/', loginRouter );
app.use('/', indexRouter );

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose.connect(process.env.DB, { useNewUrlParser: true })
.then( result =>{
  console.log("Connected..");
  app.listen(3000);
})
