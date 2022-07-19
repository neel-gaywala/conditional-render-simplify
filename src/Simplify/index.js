import PropTypes from "prop-types";
import returnElement from "../Element";
import returnElements from "../Elements";

/**
 * @param {string | object} Condition to render block, either `string` or `object`
 * @param {boolean} multiple return multiple block for type `object`, default to false
 *
 */
function Simplify({ conditions, multiple = false, ...rest }) {
  if (typeof conditions === "string") {
    const stringProp = conditions.trim();
    return returnElement(rest[stringProp]);
  }

  if (typeof conditions === "object") {
    if (multiple) {
      const stringsProp = Object.keys(conditions).filter(
        (k) => !!conditions[k]
      );
      return returnElements(rest, stringsProp);
    } else {
      const stringProp = Object.keys(conditions).find((k) => !!conditions[k]);
      return returnElement(rest[stringProp]);
    }
  }

  return null;
}

export default Simplify;

Simplify.propTypes = {
  conditions: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  multiple: PropTypes.bool,
};
