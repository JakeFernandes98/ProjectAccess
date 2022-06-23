import React from 'react';

type cardVariantType = 'elevation' | 'outlined';

export default interface CardProps {
  /** The content of the component */
  children: React.ReactNode;
  /** If true, the card will use raised styling. */
  raised?: boolean;
  /** The variant to use. */
  variant?: cardVariantType;
  /** If true, rounded corners are disabled. */
  square?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}
