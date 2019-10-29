"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _asm = _interopRequireDefault(require("./asm/asm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var asm_game =
/*#__PURE__*/
function () {
  function asm_game() {
    var _this = this;

    _classCallCheck(this, asm_game);

    this.assembler = new _asm["default"]();
    this.input_string = "";
    document.getElementById("run_program").addEventListener("click", function (evt) {
      return _this.run(evt);
    });
    document.getElementById("halt_program").addEventListener("click", function (evt) {
      return _this.halt(evt);
    });
    document.getElementById("asm_program").addEventListener("click", function (evt) {
      return _this.assembly(evt);
    });
    document.getElementById("step_program").addEventListener("click", function (evt) {
      return _this.step(evt);
    });
    document.getElementById("cont_program").addEventListener("click", function (evt) {
      return _this.cont(evt);
    });
    document.getElementById("until_program").addEventListener("click", function (evt) {
      return _this.until(evt);
    });
  }

  _createClass(asm_game, [{
    key: "run",
    value: function run() {}
  }, {
    key: "halt",
    value: function halt() {}
  }, {
    key: "assembly",
    value: function assembly() {
      this.input_string = document.getElementById("code_text").value;
      this.assembler.lexer.lex(this.input_string);
      this.assembler.lexer.print_tokens();
    }
  }, {
    key: "step",
    value: function step() {}
  }, {
    key: "cont",
    value: function cont() {}
  }, {
    key: "until",
    value: function until() {}
  }]);

  return asm_game;
}();

var _default = asm_game;
exports["default"] = _default;