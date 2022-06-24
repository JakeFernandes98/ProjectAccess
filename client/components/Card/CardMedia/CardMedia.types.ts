export default interface CardMediaProps {
  /** The component used for the root node. Either a string to use a HTML element or a component. Most likely component="img" */
  component: React.ElementType;
  /** height of the image */
  height: string;
  /** Image to be displayed as a background image */
  image: string;
  /** Alternative text for the rendered image */
  alt: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}
