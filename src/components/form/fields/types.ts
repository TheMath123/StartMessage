export interface DefaultFields {
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  formatter?: (value: string) => string;
}
