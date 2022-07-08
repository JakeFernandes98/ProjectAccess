type textfieldVariantType = 'filled' | 'outlined' | 'standard';

export default interface TextFieldProps {
  /** The text field text */
  label: string;

  /** The variant of the text field */
  variant?: textfieldVariantType;

  /** If true, the text field is disabled */
  disabled?: boolean;

  /** If true, the label is displayed in an error state */
  error?: boolean;

  /** If true, the text field takes the entire width of the container */
  fullWidth?: boolean;

  /** The type of the text field - must be a valid HTML5 input type e.g 'email',  */
  type?: string;

  /** If true, the label is displayed as required and the input is required */
  required?: boolean;

  /** Name attribute of the input element. (Used to access the data from DOM element) */
  name?: string;

  /** The id of the input element. Use this prop to make label accessible for screen readers. */
  id?: string;

  /** If true, the input element is focused during the first mount. */
  autoFocus?: boolean;

  /** This prop helps users to fill forms faster, especially on mobile devices. */
  autoComplete?: string;

  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}
