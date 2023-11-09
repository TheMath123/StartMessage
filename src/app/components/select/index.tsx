import { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export function Select({ label, ...props }: SelectProps) {
  return (
    <div className="flex flex-col w-full gap-1">
      <label htmlFor={label} className="text-base font-semibold">
        DDI
      </label>
      <select
        id={label}
        name={label}
        aria-label={label}
        className="w-full bg-green-800 text-base text-neutral-200 py-2 px-4 rounded-xl placeholder:font-medium placeholder:text-neutral-300 placeholder:text-sm "
      >
        <option value="+55">Brazil</option>
      </select>
    </div>
  );
}
