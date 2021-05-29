"use strict";

var express = require('express');

var router = express.Router();

var cors = require('cors');

var controller = require('./controller');

var corsOptions = {
  origin: [process.env.CORS, process.env.CORS2]
};
router.get('/findword/:word', cors(corsOptions), function (req, res) {
  controller.findWord(req, res);
});
router.post('/createword', cors(), function (req, res) {
  controller.createWord(req, res);
});
module.exports = router;