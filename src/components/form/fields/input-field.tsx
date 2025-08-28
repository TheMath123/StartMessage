import { useFormContext } from "react-hook-form";
import { Input, type InputProps } from "@/components/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type { DefaultFieldsProps } from "./types";

type InputFieldProps = DefaultFieldsProps & InputProps;

export function InputField({
  name,
  defaultValue = "",
  label,
  placeholder,
  description,
  formatter = (value) => value,
  inputMode,
  type = "text",
  enterKeyHint,
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
              inputMode={inputMode}
              type={type}
              enterKeyHint={enterKeyHint}
              label={label ?? ""}
              placeholder={placeholder}
              value={formatter(field.value)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                field.onChange(formatter(e.target.value))
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
