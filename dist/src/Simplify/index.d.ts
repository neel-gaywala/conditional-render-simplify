import { Element, SimplifyProps } from "../types";
/**
 * @param {string | object} Condition to render block, either `string` or `object`
 * @param {boolean} multiple return multiple block for type `object`, default to false
 *
 */
declare function Simplify({ conditions, multiple, ...rest }: SimplifyProps): Element;
export default Simplify;
