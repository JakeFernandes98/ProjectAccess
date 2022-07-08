type buttonColorType =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';

type buttonVariantType = 'contained' | 'outlined' | 'text';

type buttonTypeType = 'button' | 'submit' | 'reset';

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

  /** Specifies the type of button, e.g. a clickable button, a submit button to submit form-data, a reset button to reset form-data */
  type?: buttonTypeType;

  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}
