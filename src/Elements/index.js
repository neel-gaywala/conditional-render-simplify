import React, { Fragment } from "react";
import returnElement from "../Element";

function returnElements(rest, elementsNames) {
  if (elementsNames.length > 0) {
    return (
      <Fragment>{elementsNames.map((e) => returnElement(rest[e]))}</Fragment>
    );
  }
  return null;
}

export default returnElements;
