"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Element_1 = __importDefault(require("../Element"));
const Elements_1 = __importDefault(require("../Elements"));
/**
 * @param {string | object} Condition to render block, either `string` or `object`
 * @param {boolean} multiple return multiple block for type `object`, default to false
 *
 */
function Simplify(_a) {
    var { conditions, multiple = false } = _a, rest = __rest(_a, ["conditions", "multiple"]);
    if (typeof conditions === "string") {
        const stringProp = conditions.trim();
        return (0, Element_1.default)(rest[stringProp]);
    }
    if (typeof conditions === "object") {
        if (multiple) {
            const stringsProp = Object.keys(conditions).filter((k) => !!conditions[k]);
            return (0, Elements_1.default)(rest, stringsProp);
        }
        else {
            const stringProp = Object.keys(conditions).find((k) => !!conditions[k]);
            if (stringProp) {
                return (0, Element_1.default)(rest[stringProp]);
            }
        }
    }
    return null;
}
exports.default = Simplify;
