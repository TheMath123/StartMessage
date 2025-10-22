import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type { DefaultFieldsProps } from "./types";
import { Input } from "@/components/ui/input";

type InputFieldProps = DefaultFieldsProps ;

export function InputField({
  name,
  defaultValue = "",
  label,
  placeholder,
  description,
  formatter = (value) => value,
}: InputFieldProps) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              inputMode="tel"
              enterKeyHint="next"
              placeholder={placeholder}
              value={formatter(field.value)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                field.onChange(e.target.value)
              }
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
