var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import returnElement from "../Element";
import returnElements from "../Elements";
/**
 * @param {string | object} Condition to render block, either `string` or `object`
 * @param {boolean} multiple return multiple block for type `object`, default to false
 *
 */
function Simplify(_a) {
    var conditions = _a.conditions, _b = _a.multiple, multiple = _b === void 0 ? false : _b, rest = __rest(_a, ["conditions", "multiple"]);
    if (typeof conditions === "string") {
        var stringProp = conditions.trim();
        return returnElement(rest[stringProp]);
    }
    if (typeof conditions === "object") {
        if (multiple) {
            var stringsProp = Object.keys(conditions).filter(function (k) { return !!conditions[k]; });
            return returnElements(rest, stringsProp);
        }
        else {
            var stringProp = Object.keys(conditions).find(function (k) { return !!conditions[k]; });
            if (stringProp) {
                return returnElement(rest[stringProp]);
            }
        }
    }
    return null;
}
export default Simplify;
