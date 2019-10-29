"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _token = require("./token");

var _error = _interopRequireDefault(require("../emu/error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var lexer =
/*#__PURE__*/
function () {
  function lexer() {
    _classCallCheck(this, lexer);

    this.input_string = "";
    this.token_list = [];
    this.c = '';
    this.buffer = "";
    this.position = 0;
    this.special_chars = [["!", _token.TOKEN_TYPES.WRITEBACK], ["{", _token.TOKEN_TYPES.L_BRACKET], ["}", _token.TOKEN_TYPES.R_BRACKET], ["[", _token.TOKEN_TYPES.L_BRACE], ["]", _token.TOKEN_TYPES.R_BRACE], [",", _token.TOKEN_TYPES.SEPERATOR]]; //bind class method's "this" to the class's "this"

    this.lex = this.lex.bind(this);
    this.next = this.next.bind(this);
    this.add_token = this.add_token.bind(this);
    this.add_buffer_token = this.add_buffer_token.bind(this);
    this.is_directive = this.is_directive.bind(this);
    this.is_opcode = this.is_opcode.bind(this);
    this.is_register = this.is_register.bind(this);
    this.is_not_new_line = this.is_not_new_line.bind(this);
    this.is_not_quote = this.is_not_quote.bind(this);
    this.is_special = this.is_special.bind(this);
    this.is_alpha = this.is_alpha.bind(this);
    this.is_name = this.is_name.bind(this);
    this.is_hex_literal = this.is_hex_literal.bind(this);
    this.is_oct_literal = this.is_oct_literal.bind(this);
    this.is_bin_literal = this.is_bin_literal.bind(this);
    this.is_whitespace = this.is_whitespace.bind(this);
    this.print_tokens = this.print_tokens.bind(this);
  } //take input string and tokenise it


  _createClass(lexer, [{
    key: "lex",
    value: function lex(raw_input) {
      this.input_string = raw_input.toUpperCase();
      this.c = this.input_string[this.position];

      while (this.position < this.input_string.length) {
        //numeric literals
        if (this.c === '#') {
          //prefixed with 0, either hex or oct
          this.next();

          if (this.c === '0') {
            this.next(); //hex literal

            if (this.c === 'X') {
              this.add_buffer_token(this.is_hex_literal);
              this.add_buffer_token(_token.TOKEN_TYPES.HEX_LITERAL);
            } //octal literal
            else {
                this.add_buffer_token(this.is_oct_literal);
                this.add_buffer_token(_token.TOKEN_TYPES.OCTAL_LITERAL);
              }
          } //no prefix but starts with a digit


          if (this.is_digit(this.c)) {
            //fill the buffer with any kind of number
            this.add_buffer_token(this.is_hex_literal); //binary literal

            if (this.c === 'Y') {
              this.add_buffer_token(_token.TOKEN_TYPES.BINARY_LITERAL);
            } //dec literal
            else if (this.c === 'T') {
                this.add_buffer_token(_token.TOKEN_TYPES.DECIMAL_LITERAL);
              } //hex literal
              else if (this.c === 'H') {
                  this.add_buffer_token(_token.TOKEN_TYPES.HEX_LITERAL);
                } //oct literal
                else if (this.c === 'Q' || c === 'O') {
                    this.add_buffer_token(_token.TOKEN_TYPES.OCTAL_LITERAL);
                  } //dec literal
                  else {
                      this.add_buffer_token(_token.TOKEN_TYPES.DECIMAL_LITERAL);
                    }
          }
        } //strings
        else if (this.c === '"') {
            this.next();
            this.fill_buffer(this.is_not_quote);
            this.next();
            this.add_buffer_token(_token.TOKEN_TYPES.STRING_LITERAL);
          } //directives, opcodes, operands(registers), labels
          else if (this.is_alpha(this.c)) {
              this.fill_buffer(this.is_name); //check for assembler directives

              var dir = this.is_directive();
              var op = this.is_opcode();
              var reg = this.is_register();

              if (dir) {
                this.add_token(dir);
              } //check for opcodes
              else if (op) {
                  this.add_token(op);
                } //check for registers
                else if (reg) {
                    this.add_token(reg);
                  } //must be a label
                  else {
                      this.add_buffer_token(_token.TOKEN_TYPES.label);
                    }
            } //special symbols
            else if (this.is_special(this.c)) {
                for (var i = 0; i < this.special_chars.length; i++) {
                  if (this.c === this.special_chars[i][0]) this.add_token(this.special_chars[i][1]);
                }
              } //ignore comments
              //if there is a ";" ignore all chars until a newline
              else if (this.c == ";") {
                  this.next();
                  this.fill_buffer(is_not_new_line);
                } //whitesapce
                else if (this.is_whitespace(this.c)) {
                    this.next();
                  } else {//error
                  }
      }
    }
  }, {
    key: "next",
    value: function next() {
      this.c = this.input_string[++this.position];
    }
  }, {
    key: "fill_buffer",
    value: function fill_buffer(typefunc) {
      this.buffer = "";

      if (typefunc(this.c)) {
        while (typefunc(this.c)) {
          this.buffer += this.c;
          this.next();
        }
      } else {//error
      }
    }
  }, {
    key: "add_token",
    value: function add_token(type) {
      var t = new _token.token(type, "");
      this.token_list.push(t);
    }
  }, {
    key: "add_buffer_token",
    value: function add_buffer_token(type) {
      var t = new _token.token(type, this.buffer);
      this.token_list.push(t);
      this.buffer = "";
    }
  }, {
    key: "is_directive",
    value: function is_directive() {
      for (var i = 0; i < _token.DIRECTIVES.length; i++) {
        if (this.buffer === _token.DIRECTIVES[i]) {
          return _token.DIRECTIVES[i];
        }
      }

      return "";
    }
  }, {
    key: "is_opcode",
    value: function is_opcode() {
      for (var i = 0; i < _token.OP_CODES.length; i++) {
        if (this.buffer === _token.OP_CODES[i]) {
          return _token.OP_CODES[i];
        }
      }

      return "";
    }
  }, {
    key: "is_register",
    value: function is_register() {
      for (var i = 0; i < _token.REGISTERS.length; i++) {
        if (this.buffer === _token.REGISTERS[i]) {
          return _token.REGISTERS[i];
        }
      }

      return "";
    }
  }, {
    key: "is_not_new_line",
    value: function is_not_new_line() {
      return this.c != '\n';
    }
  }, {
    key: "is_not_quote",
    value: function is_not_quote() {
      return this.c != '"';
    }
  }, {
    key: "is_special",
    value: function is_special() {
      return this.c === '!' || this.c === '{' || this.c === '}' || this.c === '[' || this.c === ']';
    }
  }, {
    key: "is_alpha",
    value: function is_alpha() {
      return this.c >= 'A' && this.c <= 'Z';
    }
  }, {
    key: "is_name",
    value: function is_name() {
      return this.is_alpha(this.c) || this.c === '_';
    }
  }, {
    key: "is_hex_literal",
    value: function is_hex_literal() {
      return this.c >= '0' && this.c <= '9' || this.c >= 'A' && this.c <= 'F';
    }
  }, {
    key: "is_oct_literal",
    value: function is_oct_literal() {
      return this.c >= '0' && this.c <= '7';
    }
  }, {
    key: "is_bin_literal",
    value: function is_bin_literal() {
      return this.c === '1' || this.c === '0';
    }
  }, {
    key: "is_whitespace",
    value: function is_whitespace() {
      return this.c === ' ' || this.c === '\n';
    }
  }, {
    key: "print_tokens",
    value: function print_tokens() {
      for (var i = 0; i < this.token_list.length; i++) {
        console.log(this.token_list[i]);
      }
    }
  }]);

  return lexer;
}();

var _default = lexer;
exports["default"] = _default;