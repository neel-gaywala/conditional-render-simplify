import returnElement from "../Element";
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
function If({ condition, ...rest }: IfProps): Element {
  if (condition) {
    return returnElement(rest["true"]);
  }
  return returnElement(rest["false"]);
}

export default If;
