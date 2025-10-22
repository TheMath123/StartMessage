export interface DefaultFieldsProps {
  name: string;
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  description?: string;
  formatter?: (value: string) => string;
}
