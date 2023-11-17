import { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export function Select({ label, ...props }: SelectProps) {
  return (
    <div className="flex flex-col w-full gap-1">
      <label htmlFor={label} className="text-base font-semibold">
        DDI*
      </label>
      <select
        id={label}
        name={label}
        aria-label={label}
        className="px-6 py-2 rounded-lg bg-input-bg text-text placeholder:text-input-placeholder"
      >
        <option value="" defaultChecked>
          Choose here
        </option>
        <option value="+55">Brazil</option>
      </select>
    </div>
  );
}
