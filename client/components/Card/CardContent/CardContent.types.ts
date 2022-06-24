import React from 'react';

export default interface CardContentProps {
  /** The content of the component */
  children?: React.ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}
