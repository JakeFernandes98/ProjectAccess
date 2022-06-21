type checkboxColorType =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';

type checkboxSizeType = 'medium' | 'small';

export default interface CheckboxProps {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  color?: checkboxColorType;
  size?: checkboxSizeType;
  required?: boolean;
  disableRipple?: boolean;
  defaultChecked?: boolean;
}
