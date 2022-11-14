const express = require('express');

const router = express.Router();
/* GET home page. */

router.get('/', (req, res) => {
  // view model
  res.render('index', {
    title: 'Express',
    author: 'Carlo Uriek',
  });
});
module.exports = router;
