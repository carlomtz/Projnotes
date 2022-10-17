// Bliblioteca de terceros para manejar errores http
// ES5 
// var createError = require('http-errors');
// ES6
import createError from 'http-errors';
// El framework express
//var express = require('express');
import express from 'express';
//Bliblioteca del nucleo de node que sirve para administrar rutas
//var path = require('path');
import path from 'path';
//Bliblioteca externa que sirve para administrar las cookies
//var cookieParser = require('cookie-parser');
import cookieParser from 'cookie-parser';
//Bliblioteca que registra en consola solicitudes del cliente
//var logger = require('morgan');
import logger  from 'morgan';
//Importando webpackmiddelware
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.dev.config.js'
//Definicion de rutas 
//var indexRouter = require('./routes/index');
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
//var usersRouter = require('./routes/users');
//Creando una instancia de express
const app = express();

// view engine setup
// Configura el motor de plantillas
//1.Establecer donde estaran las plantillas
//(Vistas -> Viwes)
//app.set("<Nombre de la varieable>",<valor>)
app.set('views', path.join(__dirname, 'views'));
//Establesco que motor precardago usare
app.set('view engine', 'hbs');
//Establezco Middellwares
app.use(logger('dev'));
//Middelware para parsear a json la peticion 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//Servidor de archivos estaticos
app.use(express.static(path.join(__dirname,'..' ,'public')));
//Registro de Rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// function declaration 
app.use((req, res, next) =>{
  next(createError(404));
});

// error handler
//app.use(function(err, req, res, next) {
  app.use((err, req, res, next)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// Exportando la instancia del server "app"
// ES5
//module.exports = app;
// ES6 
export default app;