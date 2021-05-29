"use strict";

var express = require('express');

var router = express.Router();

var cors = require('cors');

var opt = {
  origin: [process.env.CORS]
};

var _require = require('./controller'),
    saveWord = _require.saveWord;

router.post('/saveword', cors(opt), function (req, res) {
  saveWord(req, res);
});
module.exports = router;