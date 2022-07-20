import React, { Fragment } from "react";
import returnElement from "../Element";
import { Element, Elements, ElementNames } from "../types";

function returnElements(
  rest: Elements | {},
  elementsNames: ElementNames
): Element {
  if (Object.keys(rest).length > 0 && elementsNames.length > 0) {
    return (
      <Fragment>{elementsNames.map((e) => returnElement(rest[e]))}</Fragment>
    );
  }
  return null;
}

export default returnElements;
