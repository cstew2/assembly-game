"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _token = require("./token");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var parser =
/*#__PURE__*/
function () {
  function parser(input) {
    _classCallCheck(this, parser);

    this.input = input;
    this.symbol_table = {};
  }

  _createClass(parser, [{
    key: "symbol_search",
    value: function symbol_search() {}
  }, {
    key: "symbol_insert",
    value: function symbol_insert() {}
  }]);

  return parser;
}();

var _default = parser;
exports["default"] = _default;