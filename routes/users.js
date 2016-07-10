var express = require('express');
var router = express.Router();
var Model = require('../models/Models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/allusers', function (req, res) {
  new Model.User()
      .fetchAll()
      .then(function (users) {
        res.json(users);
      })
      .catch(function (err) {
        res.send('Error cmnr');
        console.log(err);
      })
});

router.get('/studentk58clc', function (req, res) {
  new Model.RegularClass({id: 1})
      .fetchAll({ withRelated: ['users']})
      .then(function (users) {
        res.json(users);
      })
      .catch(function (err) {
        res.send('Error cmnr');
        console.log(err);
      })
});

module.exports = router;
