var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id([0-9]{1})', function(req, res, next) {
  res.send('accessing id:' + req.params.id);
});

router.get('/hello', function(req, res, next) {
  res.send('hey you');
});


module.exports = router;
