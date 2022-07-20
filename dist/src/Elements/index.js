import React, { Fragment } from "react";
import returnElement from "../Element";
function returnElements(rest, elementsNames) {
    if (Object.keys(rest).length > 0 && elementsNames.length > 0) {
        return (React.createElement(Fragment, null, elementsNames.map(function (e) { return returnElement(rest[e]); })));
    }
    return null;
}
export default returnElements;
