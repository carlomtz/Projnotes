"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _webpack = _interopRequireDefault(require("webpack"));

var _webpackDevMiddleware = _interopRequireDefault(require("webpack-dev-middleware"));

var _webpackHotMiddleware = _interopRequireDefault(require("webpack-hot-middleware"));

var _webpackDevConfig = _interopRequireDefault(require("../webpack.dev.config.js"));

var _index = _interopRequireDefault(require("./routes/index"));

var _users = _interopRequireDefault(require("./routes/users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Bliblioteca de terceros para manejar errores http
// ES5 
// var createError = require('http-errors');
// ES6
// El framework express
//var express = require('express');
//Bliblioteca del nucleo de node que sirve para administrar rutas
//var path = require('path');
//Bliblioteca externa que sirve para administrar las cookies
//var cookieParser = require('cookie-parser');
//Bliblioteca que registra en consola solicitudes del cliente
//var logger = require('morgan');
//Importando webpackmiddelware
//Definicion de rutas 
//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
//Creando una instancia de express
const app = (0, _express.default)(); // Inclusion del webpack middelware

if (nodeEnv === 'development') {
  debug('Ejecutando en modo desarrollo');
  _webpackDevConfig.default.mode = 'development';
  _webpackDevConfig.default.entry = ["webpack-hot-middelware/client?reload=true&timeout=1000", _webpackDevConfig.default.entry]; //Agregando el plugin a la configuracion 

  _webpackDevConfig.default.plugins.push(new _webpack.default.HotModuleReplacementPlugin());

  const bunndle = (0, _webpack.default)(_webpackDevConfig.default); //Registro el minddleware en express

  app.use((0, _webpackDevMiddleware.default)(bundler, {
    publicPath: _webpackDevConfig.default.output.publicPath
  }));
  app.use((0, _webpackHotMiddleware.default)(bundler));
} else {
  debug('Ejecutando en modo de produccion');
} // view engine setup
// Configura el motor de plantillas
//1.Establecer donde estaran las plantillas
//(Vistas -> Viwes)
//app.set("<Nombre de la varieable>",<valor>)


app.set('views', _path.default.join(__dirname, 'views')); //Establesco que motor precardago usare

app.set('view engine', 'hbs'); //Establezco Middellwares

app.use((0, _morgan.default)('dev')); //Middelware para parsear a json la peticion 

app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _cookieParser.default)()); //Servidor de archivos estaticos

app.use(_express.default.static(_path.default.join(__dirname, '..', 'public'))); //Registro de Rutas

app.use('/', _index.default);
app.use('/users', _users.default); // catch 404 and forward to error handler
// function declaration 

app.use((req, res, next) => {
  next((0, _httpErrors.default)(404));
}); // error handler
//app.use(function(err, req, res, next) {

app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
}); // Exportando la instancia del server "app"
// ES5
//module.exports = app;
// ES6 

var _default = app;
exports.default = _default;