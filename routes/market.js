var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('market', { title: 'Search Results Market' });
});

module.exports = router;