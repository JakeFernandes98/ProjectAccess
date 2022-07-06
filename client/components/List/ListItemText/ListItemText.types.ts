import React from 'react';

export default interface ListItemTextProps {
  /** The main content element. Usually a string. */
  primary: React.ReactNode;

  /** The secondary content element. Usually a string. */
  secondary?: React.ReactNode;
}
