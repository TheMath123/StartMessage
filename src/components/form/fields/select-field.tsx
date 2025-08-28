import type { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/utils/cn";
import type { DefaultFieldsProps } from "./types";

export interface SelectorOption {
  value: string;
  label: string | ReactNode;
}

export type SelectorOptions = SelectorOption[];

type SelectFieldProps = {
  options: SelectorOptions;
  message?: string;
  className?:
    | string
    | {
        container?: string;
        select?: string;
      };
  placeholder?: string;
  disabled?: boolean;
} & DefaultFieldsProps;

export function SelectField({
  name,
  label,
  className,
  defaultValue,
  placeholder,
  options,
  description,
  disabled = false,
}: SelectFieldProps) {
  const form = useFormContext();

  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem
          className={cn(
            "md:min-w-40",
            typeof className === "string" ? className : className?.container,
          )}
        >
          <FormLabel>{label}</FormLabel>
          <div
            className={
              typeof className !== "string" && className?.select
                ? className.select
                : undefined
            }
          >
            <Select
              disabled={disabled}
              onValueChange={field.onChange}
              defaultValue={defaultValue}
              value={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {options?.map((option: SelectorOption, index) => (
                  <SelectItem
                    key={`selector-${option.value}-${index}`}
                    value={option.value}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
