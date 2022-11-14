#!/usr/bin/env node

/**
 * Module dependencies.
 */
// var app = require('../app');
'use strict';

// eslint-disable-next-line no-underscore-dangle, no-use-before-define
const _app = _interopRequireDefault(require('../app'));

// eslint-disable-next-line no-underscore-dangle
function _interopRequireDefault(obj) {
  // eslint-disable-next-line no-underscore-dangle
  return obj && obj.__esModule ? obj : { default: obj };
}

// import debug from '../services/debugLogger'
const debug = require('debug')('projnotes');

const http = require('http');
/**
 * Get port from environment and store in Express.
 */

// eslint-disable-next-line no-use-before-define
const port = normalizePort(process.env.PORT || '3000');
_app.default.set('port', port);
/**
 * Create HTTP server.
 */

const server = http.createServer(_app.default); // app es una funcion de tipo middleware (codigo intermedieaario

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
// eslint-disable-next-line no-use-before-define
server.on('error', onError);
// eslint-disable-next-line no-use-before-define
server.on('listening', onListening);
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  // eslint-disable-next-line no-shadow
  const port = parseInt(val, 10);

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`; // handle specific listen errors with friendly messages

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;

    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;

    default:
      throw error;
  }
}
/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  let {
    port
  } = addr;
  debug(`Listening on http://localhost:${port}`);
}
