import React from "react";

function returnElement(element) {
  if ( /*#__PURE__*/React.isValidElement(element)) {
    return element;
  }

  return null;
}

export default returnElement;