import React from 'react';

type containerMaxWidthType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;

export default interface ContainerProps {
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  component: React.ElementType;
  /** If true, the left and right padding is removed. */
  disableGutters?: boolean;
  /** Determine the max-width of the container. The container width grows with the size of the screen. Set to false to disable maxWidth. */
  maxWidth?: containerMaxWidthType;
  /** The system prop that allows defining system overrides as well as additional CSS styles.  */
  sx?: object;
  /** The content inside */
  children: React.ReactNode;
}
