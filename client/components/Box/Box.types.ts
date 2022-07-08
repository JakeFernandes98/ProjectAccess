import React from 'react';

export default interface BoxProps {
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;

  /** The content of the component */
  children: React.ReactNode;

  /** The component used for the root node. Either a string to use a HTML element or a component. */
  component: React.ElementType;

  /** Leave it to the developer to decide what function to assign here */
  onSubmit?: unknown;
}
