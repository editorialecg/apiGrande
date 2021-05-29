"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var findModel = require('./model');

module.exports = {
  createWord: function createWord(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _req$body, word, published, designerby, findWord;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, word = _req$body.word, published = _req$body.published, designerby = _req$body.designerby;

              if (!(!word || !published || !designerby)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", res.status(400).send());

            case 3:
              _context.next = 5;
              return findModel.findOneByWord(word);

            case 5:
              findWord = _context.sent;

              if (findWord) {
                _context.next = 10;
                break;
              }

              _context.next = 9;
              return findModel.createWord(word, published, designerby);

            case 9:
              return _context.abrupt("return", res.status(200).json({
                msg: 'Save'
              }));

            case 10:
              return _context.abrupt("return", res.status(401).send());

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  findWord: function findWord(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var word, findword;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              word = req.params.word;

              if (word) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return", res.status(400).send());

            case 3:
              _context2.next = 5;
              return findModel.findWord(word);

            case 5:
              findword = _context2.sent;

              if (findword) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt("return", res.status(404).send());

            case 8:
              return _context2.abrupt("return", res.status(200).send(findword));

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};