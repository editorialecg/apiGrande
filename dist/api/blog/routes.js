"use strict";

var express = require('express');

var router = express.Router();

var cors = require('cors');

var opt = {
  origin: [process.env.CORS]
};

var _require = require('./controller'),
    saveblog = _require.saveblog;

router.post('/saveblog', cors(opt), function (req, res) {
  saveblog(req, res);
});
module.exports = router;