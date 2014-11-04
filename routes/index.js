var express = require('express');
var router = express.Router();
var fs = require('fs');
var users = [];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/* GET home page. */
router.post('/sign-up', function(req, res) {
    console.log('body', req.body);
    users.push(req.body);
    console.log('users', users);
    res.send(users);
});

module.exports = router;
