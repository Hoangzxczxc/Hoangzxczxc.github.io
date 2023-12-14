var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//1A. declare routers (1 collection - 1 router)
var mobileRouter = require('./routes/mobile');  //mobile.js
var brandRouter = require('./routes/brand');    //brand.js

var app = express();
//2. import and config "mongoose" module/package/library
var mongoose = require('mongoose');
var uri = "mongodb+srv://mongodb+srv://hoangnhgch211192:23042003HOANG@cloud-db.5ahhvfy.mongodb.net/gch1106"
//  uri : db_server + db_name . Ex: gch1106 => db_name
mongoose.connect(uri)
  .then(() => console.log('ok'))
  .catch((err) => console.log(err));

//3. import and config "body-parser" module
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//1B. declare path (url) for routers
app.use('/mobile', mobileRouter);
app.use('/brand', brandRouter);

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

//4. config port (for cloud deployment on Render)
app.listen(process.env.PORT || 3001);
module.exports = app;
