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
const material_1 = require("@mui/material");
/**
 * @param {object} breakpoints Object defining breakpoints to render each element
 * @param {Element} defaultLayout A fallback layout to render, this can be a mobile-first layout
 *
 */
function Responsive(_a) {
    var { breakpoints, defaultLayout } = _a, rest = __rest(_a, ["breakpoints", "defaultLayout"]);
    if (typeof breakpoints === "object") {
        let activeBreakpoint = "";
        const matchingBreakpoints = Object.keys(breakpoints).filter((k) => {
            return (0, material_1.useMediaQuery)(`(min-width:${breakpoints[k]}px)`);
        });
        if (matchingBreakpoints.length) {
            activeBreakpoint = matchingBreakpoints.reduce((prev, curr) => breakpoints[curr] > breakpoints[prev] ? curr : prev);
        }
        const isInView = (0, material_1.useMediaQuery)("(min-width:0px)");
        if (isInView) {
            return (0, Element_1.default)(activeBreakpoint ? rest[activeBreakpoint] : defaultLayout);
        }
    }
    return null;
}
exports.default = Responsive;
