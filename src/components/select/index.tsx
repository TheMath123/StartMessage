import { SelectHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type OptionProps = {
  name: string;
  value?: any;
};

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: OptionProps[];
  label: string;
  errorMessage?: string;
  loading?: boolean;
  register?: any;
}

export function Select({
  options,
  label,
  errorMessage,
  loading = false,
  register,
}: SelectProps) {
  function* generateOptions(options: OptionProps[]) {
    for (let [index, item] of options.entries()) {
      yield (
        <option
          selected={index === 0}
          key={`dpInput${item.name.trim()}#${index}`}
          value={item.value}
        >
          {item.name}
        </option>
      );
    }
  }

  return (
    <div className="flex flex-col w-full gap-1 relative">
      <label htmlFor={label} className="text-base font-semibold">
        DDI
      </label>
      {loading ? (
        <div className="h-12 rounded bg-input-bg w-full flex items-center animate-pulse border border-neutral-700"></div>
      ) : (
        <select
          {...register}
          id={label}
          name={label}
          aria-label={label}
          disabled={loading}
          className={cn(
            "px-6 py-3 w-full h-12 rounded bg-input-bg text-white placeholder:text-neutral-300 border",
            "focus:border focus:border-primary",
            errorMessage && errorMessage.length > 1
              ? "border border-red-700"
              : "border-neutral-700",
          )}
        >
          {[...generateOptions(options)]}
        </select>
      )}
      <div className="absolute z-10 right-4 top-10 text-neutral-300">▾</div>
      {errorMessage && errorMessage.length > 1 && <span>{errorMessage}</span>}
    </div>
  );
}