"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var error =
/*#__PURE__*/
function () {
  function error() {
    _classCallCheck(this, error);

    this.error_log = [];
    this.error_count = 0;
  }

  _createClass(error, [{
    key: "add_error",
    value: function add_error(err_string) {
      var timestamp = new Date();
      this.error_log[this.error_count++] = "[" + timestamp.now() + "]  " + err_string;
      console.log(this.error_log[this.error_count]);
    }
  }, {
    key: "get_error",
    value: function get_error(index) {
      return error_log[index];
    }
  }]);

  return error;
}();

exports["default"] = error;