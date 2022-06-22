import React from 'react';

type gridDirectionType = 'column-reverse' | 'column' | 'row-reverse' | 'row';

type gridItemColSpanType = 'auto' | number | boolean;

type gridWrapType = 'nowrap' | 'wrap-reverse' | 'wrap';

export default interface GridProps {
  /** The content of the component */
  children?: React.ReactNode;
  /** If true, the component will have the flex item behavior. You should be wrapping items with a container. */
  item?: boolean;
  /** If true, the component will have the flex container behavior. You should be wrapping items with a container. */
  container?: boolean;
  /** The number of columns. Default is 12 */
  columns?: number;
  /** Defines the horizontal space between the type item components. It overrides the value of the spacing prop. */
  columnSpacing?: number;
  /** Defines the vertical space between the type item components. It overrides the value of the spacing prop. */
  rowSpacing?: number;
  /** Defines the space between the type item components. It can only be used on a type container component. */
  spacing?: number;
  /** Defines the flex-direction style property. */
  direction?: gridDirectionType;
  /** Justify content */
  justifyContent?: string;
  /** Defines the flex-wrap style property. It's applied for all screen sizes. */
  wrap?: gridWrapType;
  /** xs, sm, md, lg, xl -
   * If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the respective (xs, sm, m, lg, xl) breakpoints and wider screens if not overridden. */
  xs?: gridItemColSpanType;
  sm?: gridItemColSpanType;
  md?: gridItemColSpanType;
  lg?: gridItemColSpanType;
  xl?: gridItemColSpanType;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}
