import returnElement from "../Element";
import { Element, ResponsiveProps, ResponsiveConditionObject } from "../types";
import { useMediaQuery } from "@mui/material";

/**
 * @param {object} breakpoints Object defining breakpoints to render each element
 * @param {Element} defaultLayout A fallback layout to render, this can be a mobile-first layout
 *
 */
function Responsive({
  breakpoints,
  defaultLayout,
  ...rest
}: ResponsiveProps): Element {
  if (typeof breakpoints === "object") {
    let activeBreakpoint: string = "";
    const matchingBreakpoints = Object.keys(breakpoints).filter(
      (k: keyof ResponsiveConditionObject) => {
        return useMediaQuery(`(min-width:${breakpoints[k]}px)`);
      }
    );
    if (matchingBreakpoints.length) {
      activeBreakpoint = matchingBreakpoints.reduce((prev, curr) =>
        breakpoints[curr] > breakpoints[prev] ? curr : prev
      );
    }

    const isInView = useMediaQuery("(min-width:0px)");
    if (isInView) {
      return returnElement(
        activeBreakpoint ? rest[activeBreakpoint] : defaultLayout
      );
    }
  }
  return null;
}

export default Responsive;
