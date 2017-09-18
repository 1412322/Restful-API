var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '1412322 - Luong Nhat Minh' });
});

router.get('/addstudent', function(req, res, next) {
  res.render('index', { title: '1412322 - Luong Nhat Minh' });
});

router.get('/studentinfo/:id', function(req, res, next) {
  res.render('index', { title: '1412322 - Luong Nhat Minh', id: req.params.id });
});

module.exports = router;