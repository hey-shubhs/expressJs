var express = require('express');
var router = express.Router();

/* GET home page. */

router.post('/add', function(req, res, next) {
        var a = Number(req.body.a);
        var b = Number(req.body.b);
        res.end("The result is:" + (a+b));
});

router.post('/mul', function(req, res, next) {
    var a = Number(req.body.a);
    var b = Number(req.body.b);
    res.end("The result is:" + (a*b));
});
module.exports = router;