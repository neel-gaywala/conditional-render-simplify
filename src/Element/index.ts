import React from "react";
import { Element } from "../types";

function returnElement(element: Element): Element {
  if (React.isValidElement(element)) {
    return element;
  }
  return null;
}

export default returnElement;
