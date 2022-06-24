type formControlLabelLabelPlacementType = 'bottom' | 'end' | 'start' | 'top';

export default interface FormControlLabelProps {
  /** A control element. For instance, it can be a Radio, a Switch or a Checkbox. */
  control: React.ReactElement;

  /** The label: A text to be used in the enclosing label element. */
  label?: string;

  /** The position of the label. */
  labelPlacement?: formControlLabelLabelPlacementType;

  /** The value of the component. */
  value?: string;
}
