import returnElement from "../Element";
import returnElements from "../Elements";
import { ConditionObject, Element, SimplifyProps } from "../types";

/**
 * @param {string | object} Condition to render block, either `string` or `object`
 * @param {boolean} multiple return multiple block for type `object`, default to false
 *
 */
function Simplify({
  conditions,
  multiple = false,
  ...rest
}: SimplifyProps): Element {
  if (typeof conditions === "string") {
    const stringProp = conditions.trim();
    return returnElement(rest[stringProp]);
  }

  if (typeof conditions === "object") {
    if (multiple) {
      const stringsProp = Object.keys(conditions).filter(
        (k: keyof ConditionObject) => !!conditions[k]
      );
      return returnElements(rest, stringsProp);
    } else {
      const stringProp = Object.keys(conditions).find(
        (k: keyof ConditionObject) => !!conditions[k]
      );
      if (stringProp) {
        return returnElement(rest[stringProp]);
      }
    }
  }

  return null;
}

export default Simplify;
