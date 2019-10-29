"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.token = exports.REGISTERS = exports.OP_CODES = exports.DIRECTIVES = exports.TOKEN_TYPES = exports.Enum = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Enum = function Enum(constantsList) {
  _classCallCheck(this, Enum);

  for (var i in constantsList) {
    this[constantsList[i]] = i;
  }

  this.length = constantsList.length;
};

exports.Enum = Enum;
var TOKEN_TYPES = new Enum(["INSTRUCTION", "LABEL", "HEX_LITERAL", "BINARY_LITERAL", "OCTAL_LITERAL", "DECIMAL_LITERAL", "REGISTER", "IMMEDIATE_SHIFT", "SEPERATOR", "WRITE_BACK", "L_BRACE", "R_BRACE", "L_BRACKET", "R_BRACKET", "DIRECTIVE", "STRING_LITERAL"]);
exports.TOKEN_TYPES = TOKEN_TYPES;
var DIRECTIVES = new Enum(["AREA", "DATA", "CODE", "READ", "WRITE", "ALIGN", "DCB", "DCD", "DCQ", "DCW", "FILL", "SPACE", "EQU", "ENTRY", "END"]);
exports.DIRECTIVES = DIRECTIVES;
var OP_CODES = new Enum(["ADC", "ADD", "AND", "B", "BIC", "BL", "BX", "CDP", "CMN", "CMP", "EOR", "LDC", "LDM", "LDR", "MCR", "MLA", "MOV", "MRC", "MRS", "MSR", "MUL", "MVN", "ORR", "RSB", "RSC", "SBC", "STC", "STM", "STR", "SUB", "SWI", "SWP", "TEQ", "TST"]);
exports.OP_CODES = OP_CODES;
var REGISTERS = new Enum(["r0", "r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9", "r10", "r11", "r12", "r13", "r14", "r15", "sp", "fp", "pc"]);
exports.REGISTERS = REGISTERS;

var token =
/*#__PURE__*/
function () {
  function token(type, value) {
    _classCallCheck(this, token);

    this.type = type;
    this.value = value;
    this.get_type = this.get_type.bind(this);
    this.get_value = this.get_value.bind(this);
  }

  _createClass(token, [{
    key: "get_type",
    value: function get_type() {
      return this.type;
    }
  }, {
    key: "get_value",
    value: function get_value() {
      return this.value;
    }
  }]);

  return token;
}();

exports.token = token;