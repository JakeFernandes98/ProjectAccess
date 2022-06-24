type avatarVariantType = 'circular' | 'rounded' | 'square';

export default interface AvatarProps {
  /** Alternative text for the rendered image */
  alt: string;
  /** Identifies the avatar image by a URL */
  src: string;
  /**  The shape of the avatar */
  variant?: avatarVariantType;
  /** Allows additional CSS styles such as size, border */
  sx?: object;
}
