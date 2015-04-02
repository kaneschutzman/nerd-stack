'use strict';

var express = require('express');
var router = express.Router();

// Route imports
var user = require('../../api/user');
var thing = require('../../api/thing');

router.get('/user', user.get);
router.post('/user', user.create);
router.get('/thing', thing.get);
router.post('/thing', thing.create);

// catch 404 and forward to error handler
router.use(function (req, res) {
  res.status(404).send('Incorrect API route');
});

module.exports = router;