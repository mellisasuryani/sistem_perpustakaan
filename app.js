var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//data model
var sequelize = require('./models/index');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var anggotaRouter = require('./routes/anggota');
var bukuRouter = require('./routes/buku');
var pengembalianRouter = require('./routes/pengembalian');
var transaksiRouter = require('./routes/transaksi');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter );
app.use('/anggota', anggotaRouter);
app.use('/buku', bukuRouter);
app.use('/pengembalian', pengembalianRouter);
app.use('/transaksi', transaksiRouter);

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

// Sinkronkan model dengan database
sequelize.sync()
.then(() => {
console.log('Database synchronized');
})
.catch(err => {
console.error('Error synchronizing database:', err);
});


module.exports = app;
