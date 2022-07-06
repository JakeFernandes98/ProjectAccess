export default interface ListProps {
  /** The content of the List. Most likely will be multiple ListItem components */
  children: React.ReactNode;

  /** If true, compact vertical padding designed for keyboard and mouse input is used for the list and list items. */
  dense?: boolean;
}
