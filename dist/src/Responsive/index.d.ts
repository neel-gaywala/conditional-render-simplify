import { Element, ResponsiveProps } from "../types";
/**
 * @param {object} breakpoints Object defining breakpoints to render each element
 * @param {Element} defaultLayout A fallback layout to render, this can be a mobile-first layout
 *
 */
declare function Responsive({ breakpoints, defaultLayout, ...rest }: ResponsiveProps): Element;
export default Responsive;
