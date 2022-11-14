Object.defineProperty(exports, '__esModule', {
  value: true,
});
// eslint-disable-next-line no-underscore-dangle, no-void
const __default = void 0;
// eslint-disable-next-line no-restricted-exports
export { __default as default };

// eslint-disable-next-line no-underscore-dangle, no-use-before-define
const _httpErrors = _interopRequireDefault(require('http-errors'));

// eslint-disable-next-line no-underscore-dangle, no-use-before-define
const _express = _interopRequireDefault(require('express'));

// eslint-disable-next-line no-underscore-dangle, no-use-before-define
const _path = _interopRequireDefault(require('path'));

// eslint-disable-next-line no-underscore-dangle, no-use-before-define
const _cookieParser = _interopRequireDefault(require('cookie-parser'));

// eslint-disable-next-line no-use-before-define, no-underscore-dangle
const _morgan = _interopRequireDefault(require('morgan'));

// eslint-disable-next-line no-underscore-dangle, no-use-before-define
const _webpack = _interopRequireDefault(require('webpack'));

// eslint-disable-next-line no-underscore-dangle, no-use-before-define
const _webpackDevMiddleware = _interopRequireDefault(
  require('webpack-dev-middleware')
);

// eslint-disable-next-line no-underscore-dangle, no-use-before-define
const _webpackHotMiddleware = _interopRequireDefault(
  require('webpack-hot-middleware')
);

// eslint-disable-next-line no-underscore-dangle, no-use-before-define
const _webpackDevConfig = _interopRequireDefault(
  // eslint-disable-next-line import/extensions
  require('../webpack.dev.config.js')
);

// eslint-disable-next-line no-underscore-dangle, no-use-before-define
const _index = _interopRequireDefault(require('./routes/index'));

// eslint-disable-next-line no-underscore-dangle, no-use-before-define
const _users = _interopRequireDefault(require('./routes/users'));

// eslint-disable-next-line no-underscore-dangle
function _interopRequireDefault(obj) {
  // eslint-disable-next-line no-underscore-dangle
  return obj && obj.__esModule ? obj : { default: obj };
}

// Creando una instancia de express
const app = (0, _express.default)(); // Inclusion del webpack middelware

// eslint-disable-next-line no-undef
if (nodeEnv === 'development') {
  // eslint-disable-next-line no-undef
  debug('Ejecutando en modo desarrollo');
  _webpackDevConfig.default.mode = 'development';
  _webpackDevConfig.default.entry = [
    'webpack-hot-middelware/client?reload=true&timeout=1000',
    _webpackDevConfig.default.entry,
  ]; // Agregando el plugin a la configuracion

  _webpackDevConfig.default.plugins.push(
    new _webpack.default.HotModuleReplacementPlugin()
  );

  const bunndle = (0, _webpack.default)(_webpackDevConfig.default); // Registro el minddleware en express

  app.use(
    (0, _webpackDevMiddleware.default)(bunndle, {
      publicPath: _webpackDevConfig.default.output.publicPath,
    })
  );
  app.use((0, _webpackHotMiddleware.default)(bunndle));
} else {
  // eslint-disable-next-line no-undef
  debug('Ejecutando en modo de produccion');
} // view engine setup
// Configura el motor de plantillas
// 1.Establecer donde estaran las plantillas
// (Vistas -> Viwes)
// app.set("<Nombre de la varieable>",<valor>)

app.set('views', _path.default.join(__dirname, 'views')); // Establesco que motor precardago usare

app.set('view engine', 'hbs'); // Establezco Middellwares

app.use((0, _morgan.default)('dev')); // Middelware para parsear a json la peticion

app.use(_express.default.json());
app.use(
  _express.default.urlencoded({
    extended: false,
  })
);
app.use((0, _cookieParser.default)()); // Servidor de archivos estaticos

app.use(_express.default.static(_path.default.join(__dirname, '..', 'public'))); // Registro de Rutas

app.use('/', _index.default);
app.use('/users', _users.default); // catch 404 and forward to error handler
// function declaration

app.use((req, res, next) => {
  next((0, _httpErrors.default)(404));
}); // error handler

app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
}); // Exportando la instancia del server "app"
// ES5
// module.exports = app;
// ES6

// eslint-disable-next-line no-underscore-dangle
// const _default = app;
