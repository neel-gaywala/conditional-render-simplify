import { Element, MappingProps } from "../types";
/**
 * The `Mapping` component renders a list of items with support for fallback states.
 *
 * @param {T[]} data - The array of items to be mapped and rendered.
 * @param {(item: T, index: number) => React.ReactNode} renderItem - Function to render each item in the `data` array.
 * @param {boolean} isLoading - Flag to indicate if loading is in progress.
 * @param {React.ReactNode} fallbackEmpty - Element to render when `data` is empty.
 * @param {React.ReactNode} fallbackLoading - Element to render during loading state.
 *
 */
declare function Mapping<T>({ data, renderItem, isLoading, fallbackEmpty, fallbackLoading, }: MappingProps<T>): Element;
export default Mapping;
