import PropTypes from "prop-types";
import returnElement from "../Element";

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
function If(props) {
  const { condition } = props;
  if (condition) {
    return returnElement(props["true"]);
  }
  return returnElement(props["false"]);
}

export default If;

If.propTypes = {
  condition: PropTypes.bool,
  true: PropTypes.element,
  false: PropTypes.element,
};
