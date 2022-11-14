#!/usr/bin/env node

/**
 * Module dependencies.
 */

import http from 'http';
import app from '../app';
// import debug from '../services/debugLogger'
import configKeys from '../config/configKeys';

const debug = require('debug')('projnotes');

/**
 * Get port from environment and store in Express.
 */

// eslint-disable-next-line no-use-before-define
const port = normalizePort(configKeys.port);
app.set('port', port);

/**
 * Create HTTP server.
 */
// app es una funcion de tipo middleware (codigo intermedieaario

const server = http.createServer(app);

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

  const bind = typeof port === 'string';
  // eslint-disable-next-line no-unused-expressions
  `Pipe ${port}``Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
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
  const addr = server.address();
  // eslint-disable-next-line no-unused-vars
  const bind =
    typeof addr === 'string' ? `pipe ${{ addr }}` : `port ${addr.port}`;

  // Desestructurando port de addr
  // eslint-disable-next-line no-shadow
  const { port } = addr;
  debug(`Listening on http://localhost:${port}`);
}
