import React from "react";

function returnElement(element) {
  if (React.isValidElement(element)) {
    return element;
  }
  return null;
}

export default returnElement;
