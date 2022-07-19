import React from 'react';
import ListItemTextProps from '../ListItemText/ListItemText.types';

export default interface ListItemButtonProps extends ListItemTextProps {
  /** Any other components wanted in the button, e.g. ListItemIcon */
  children?: React.ReactNode;
}
