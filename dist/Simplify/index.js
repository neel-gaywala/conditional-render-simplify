"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Element = _interopRequireDefault(require("../Element"));

var _Elements = _interopRequireDefault(require("../Elements"));

var _excluded = ["conditions", "multiple"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @param {string | object} Condition to render block, either `string` or `object`
 * @param {boolean} multiple return multiple block for type `object`, default to false
 *
 */
function Simplify(_ref) {
  var conditions = _ref.conditions,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      rest = _objectWithoutProperties(_ref, _excluded);

  if (typeof conditions === "string") {
    var stringProp = conditions.trim();
    return (0, _Element.default)(rest[stringProp]);
  }

  if (_typeof(conditions) === "object") {
    if (multiple) {
      var stringsProp = Object.keys(conditions).filter(function (k) {
        return !!conditions[k];
      });
      return (0, _Elements.default)(rest, stringsProp);
    } else {
      var _stringProp = Object.keys(conditions).find(function (k) {
        return !!conditions[k];
      });

      return (0, _Element.default)(rest[_stringProp]);
    }
  }

  return null;
}

var _default = Simplify;
exports.default = _default;
Simplify.propTypes = {
  conditions: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  multiple: _propTypes.default.bool
};