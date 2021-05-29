"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('../../service/service'),
    dictionaryService = _require.dictionaryService;

module.exports = {
  saveWord: function saveWord(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _req$body, word, syn, ant, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, word = _req$body.word, syn = _req$body.syn, ant = _req$body.ant;
              _context.next = 3;
              return dictionaryService(word, syn, ant);

            case 3:
              data = _context.sent;

              if (!(data == 401)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", res.status(401).send());

            case 6:
              if (!(data == 200)) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", res.status(200).send());

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
};