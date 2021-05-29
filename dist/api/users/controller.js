"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newUser = newUser;
exports.login = login;
exports.profile = profile;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('./model'),
    newUserModel = _require.newUserModel,
    findUsername = _require.findUsername,
    updated_at = _require.updated_at;

var _require2 = require('./DTO'),
    sendDataLogin = _require2.sendDataLogin;

var _require3 = require('../../microservice/micro'),
    getTime = _require3.getTime;

function newUser(_x, _x2) {
  return _newUser.apply(this, arguments);
}

function _newUser() {
  _newUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, username, password, department, cargo, active, created_at, updated_at, find, findSave;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, username = _req$body.username, password = _req$body.password, department = _req$body.department, cargo = _req$body.cargo;
            active = true;
            created_at = getTime();
            updated_at = getTime();

            if (!(!name || !username || !password || !department || !cargo)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(400).send());

          case 6:
            _context.next = 8;
            return findUsername(username);

          case 8:
            find = _context.sent;

            if (!find) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(401).send());

          case 11:
            _context.next = 13;
            return newUserModel(name, username, password, department, cargo, active, created_at, updated_at);

          case 13:
            _context.next = 15;
            return findUsername(username);

          case 15:
            findSave = _context.sent;

            if (!findSave) {
              _context.next = 18;
              break;
            }

            return _context.abrupt("return", res.status(200).send());

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _newUser.apply(this, arguments);
}

function login(_x3, _x4) {
  return _login.apply(this, arguments);
}

function _login() {
  _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, username, password, find, time, send;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password;

            if (!(!username || !password)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", res.status(400).send());

          case 3:
            _context2.next = 5;
            return findUsername(username);

          case 5:
            find = _context2.sent;

            if (find) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(404));

          case 8:
            if (password) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(401).send());

          case 10:
            _context2.next = 12;
            return updated_at(username, getTime());

          case 12:
            time = _context2.sent;
            _context2.next = 15;
            return sendDataLogin(find.name, username, find.department, find.cargo, find.active, time);

          case 15:
            send = _context2.sent;
            return _context2.abrupt("return", res.status(200).json({
              send: send
            }));

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _login.apply(this, arguments);
}

function profile(_x5, _x6) {
  return _profile.apply(this, arguments);
}

function _profile() {
  _profile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var username, find, send;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            username = req.params.username;

            if (username) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return", res.status(400).send());

          case 3:
            _context3.next = 5;
            return findUsername(username);

          case 5:
            find = _context3.sent;

            if (find) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.status(404).send());

          case 8:
            _context3.next = 10;
            return sendDataLogin(find.name, username, find.department, find.cargo, find.active, time);

          case 10:
            send = _context3.sent;
            return _context3.abrupt("return", res.status(200).json({
              send: send
            }));

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _profile.apply(this, arguments);
}