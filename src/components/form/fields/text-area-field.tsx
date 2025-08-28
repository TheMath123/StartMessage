import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import type { DefaultFieldsProps } from "./types";

type TextAreaFieldProps = DefaultFieldsProps & React.ComponentProps<"textarea">;

export function TextAreaField({
  name,
  label,
  defaultValue = "",
  placeholder,
  description,
  formatter = (value) => value,
}: TextAreaFieldProps) {
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
            <Textarea
              placeholder={placeholder}
              value={formatter(field.value)}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
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
