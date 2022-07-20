import { Element, IfProps } from "../types";
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
declare function If({ condition, ...rest }: IfProps): Element;
export default If;
