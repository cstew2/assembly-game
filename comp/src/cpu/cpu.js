"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var defs = _interopRequireWildcard(require("../defs"));

var error = _interopRequireWildcard(require("../emu/error"));

var memory = _interopRequireWildcard(require("../cpu/memory"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var cpu =
/*#__PURE__*/
function () {
  function cpu() {
    _classCallCheck(this, cpu);

    //general purpose registers
    this.gen_reg = new Array(13);
    this.gen_reg.fill(0x0);
    this.stack_pointer = 0x0; //r13

    this.link_register = 0x0; //r14

    this.program_counter = 0x0; //r15
    //special purpose registers

    this.instruction_reg = 0x0;
    this.memory_buffer_reg = 0x0;
    this.memory_address_reg = 0x0; //Current Program Status Register

    this.negative = false;
    this.zero = false;
    this.carry = false;
    this.overflow = false;
  }

  _createClass(cpu, [{
    key: "fetch",
    value: function fetch() {
      instruction_reg = get_mem();
    }
  }, {
    key: "decode",
    value: function decode() {}
  }, {
    key: "execture",
    value: function execture() {}
  }]);

  return cpu;
}();