"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lexer = _interopRequireDefault(require("./lexer"));

var _parser = _interopRequireDefault(require("./parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var asm = function asm() {
  _classCallCheck(this, asm);

  this.lexer = new _lexer["default"]();
  this.parser = new _parser["default"]();
};

var _default = asm;
exports["default"] = _default;