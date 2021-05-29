"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendDataLogin = sendDataLogin;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function sendDataLogin(_x, _x2, _x3, _x4) {
  return _sendDataLogin.apply(this, arguments);
}

function _sendDataLogin() {
  _sendDataLogin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name, username, department, updated_at) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {
              name: name,
              username: username,
              department: department,
              cargo: cargo,
              active: active,
              updated_at: updated_at
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _sendDataLogin.apply(this, arguments);
}