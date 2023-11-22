import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
  register?: any;
}

export function Input({ label, errorMessage, register, ...props }: InputProps) {
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
        {...register}
        {...props}
      />
      {errorMessage && errorMessage.length > 1 && <span>{errorMessage}</span>}
    </div>
  );
}
