export interface TextFieldProps {
  value: string;
  label: string;
  placeholder: string;
  hasError?: boolean;
  handleChange: (value: string) => void;
}

export {}