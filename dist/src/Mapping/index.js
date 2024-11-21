"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Element_1 = __importDefault(require("../Element"));
/**
 * The `Mapping` component renders a list of items with support for fallback states.
 *
 * @param {T[]} data - The array of items to be mapped and rendered.
 * @param {(item: T, index: number) => React.ReactNode} renderItem - Function to render each item in the `data` array.
 * @param {boolean} isLoading - Flag to indicate if loading is in progress.
 * @param {React.ReactNode} fallbackEmpty - Element to render when `data` is empty.
 * @param {React.ReactNode} fallbackLoading - Element to render during loading state.
 *
 */
function Mapping({ data, renderItem, isLoading = false, fallbackEmpty = null, fallbackLoading = null, }) {
    if (isLoading)
        return (0, Element_1.default)(fallbackLoading);
    if (Array.isArray(data) &&
        typeof renderItem === "function" &&
        data.length > 0) {
        return data.map((item, index) => renderItem(item, index));
    }
    if (Array.isArray(data) && data.length === 0) {
        return (0, Element_1.default)(fallbackEmpty);
    }
    return null;
}
exports.default = Mapping;
