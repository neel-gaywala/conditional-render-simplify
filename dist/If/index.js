"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Element = _interopRequireDefault(require("../Element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * If (`condition` is true) {
 *
 *  `true` block will be rendered
 *
 * } else {
 *
 * `false` block will be rendered
 *
 * }
 *
 */
function If(props) {
  var condition = props.condition;

  if (condition) {
    return (0, _Element.default)(props["true"]);
  }

  return (0, _Element.default)(props["false"]);
}

var _default = If;
exports.default = _default;
If.propTypes = {
  condition: _propTypes.default.bool,
  true: _propTypes.default.element,
  false: _propTypes.default.element
};