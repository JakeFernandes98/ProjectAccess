import React from 'react';

export default interface CardHeaderProps {
  /** The action to display in the card header. */
  action?: React.ReactNode;
  /** The Avatar element to display. */
  avatar?: React.ReactNode;
  /** The subheader text */
  subheader?: string;
  /** The title text */
  title?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}
