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
        className="w-full bg-green-800 text-base text-neutral-200 py-2 px-4 rounded-xl placeholder:font-medium placeholder:text-neutral-300 placeholder:text-sm"
        {...props}
      />
    </div>
  );
}
