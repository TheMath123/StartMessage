import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col w-full gap-1">
      <label htmlFor={label} className="text-base font-semibold">
        {label}
      </label>
      <input
        id={label}
        name={label}
        aria-label={label}
        className="px-6 py-2 rounded-lg bg-input-bg text-text placeholder:text-input-placeholder"
        {...props}
      />
    </div>
  );
}
