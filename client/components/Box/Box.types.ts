import React from 'react';

export default interface BoxProps {
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx: object;
  /** The content of the component */
  children: React.ReactNode;
}
