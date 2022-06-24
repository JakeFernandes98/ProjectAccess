import React from 'react';

export default interface CardActionsProps {
  /** The content of the component */
  children?: React.ReactNode;
  /** If true, the actions do not have additional margin. */
  disableSpacing?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}
