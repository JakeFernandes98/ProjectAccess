export default interface ListItemProps {
  /** Content of the list item, most likely a combination of ListItemText and ListItemIcon,or ListItemButton as a wrapper of these two. */
  children: React.ReactNode;
  /** If true, a 1px light border is added to the bottom of the list item. */
  divider?: boolean;
}
