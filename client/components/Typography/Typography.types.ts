import React from 'react';

type typographyVariantType =
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'inherit'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2';

/** These may need to be expanded as per need */
type typographyComponentType = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type typographyAlignType = 'center' | 'inherit' | 'justify' | 'left' | 'right';

type typographyColorType =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error';

export default interface TypographyProps {
  /** Content of the typography, most likely a string */
  children: React.ReactNode;

  /** Applies the theme typography style */
  variant: typographyVariantType;

  /** It's important to note that the style of a typography component is independent from the semantic underlying element. To change the underlying semantic element, use the component prop.*/
  component: typographyComponentType;

  /** Set the text-alignment */
  align?: typographyAlignType;

  /** If true, the text will have a bottom margin */
  gutterBottom?: boolean;

  /** Change the color of the text */
  color?: typographyColorType;
}
