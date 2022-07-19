"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function returnElement(element) {
  if ( /*#__PURE__*/_react.default.isValidElement(element)) {
    return element;
  }

  return null;
}

var _default = returnElement;
exports.default = _default;