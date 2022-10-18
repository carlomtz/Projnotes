"use strict";

var express = require('express');

var router = express.Router();
/* GET home page. */

router.get('/', function (req, res, next) {
  // view model
  res.render('index', {
    title: 'Express',
    author: 'Carlo Uriek'
  });
});
module.exports = router;