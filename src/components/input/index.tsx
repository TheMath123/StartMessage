import { InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

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
        className={cn(
          "px-6 py-3 rounded bg-input-bg text-white placeholder:text-neutral-300",
          "focus:border-primary focus:outline-0",
          errorMessage && errorMessage.length > 1
            ? "border border-red-700"
            : "border-neutral-700",
        )}
        {...register}
        {...props}
      />
      {errorMessage && errorMessage.length > 1 && (
        <span className="text-red-700 text-center">{errorMessage}</span>
      )}
    </div>
  );
}
