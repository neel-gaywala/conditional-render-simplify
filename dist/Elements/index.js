import React, { Fragment } from "react";
import returnElement from "../Element";

function returnElements(rest, elementsNames) {
  if (elementsNames.length > 0) {
    return /*#__PURE__*/React.createElement(Fragment, null, elementsNames.map(e => returnElement(rest[e])));
  }

  return null;
}

export default returnElements;