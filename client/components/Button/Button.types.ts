type buttonColorType =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';

type buttonVariantType = 'contained' | 'outlined' | 'text';

export default interface ButtonProps {
  /** The button text */
  label: string;
  /** The button colour */
  color?: buttonColorType;
  /** The variant of the button */
  variant?: buttonVariantType;
  /** If true, the button is disabled */
  disabled?: boolean;
  /** If true, the button takes the entire width of the container */
  fullWidth?: boolean;
}
