import { InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  errorMessage?: string;
  register?: any;
}

export function TextArea({
  label,
  errorMessage,
  register,
  ...props
}: TextAreaProps) {
  return (
    <div className="flex flex-col w-full gap-1">
      <label htmlFor={label} className="text-base font-semibold">
        {label}
      </label>
      <textarea
        id={label}
        name={label}
        aria-label={label}
        className={cn(
          "px-6 py-3 rounded bg-input-bg text-white placeholder:text-neutral-300 border",
          "focus:border-primary focus:outline-0",
          errorMessage && errorMessage.length > 1
            ? "border-red-700"
            : "border-neutral-700",
        )}
        maxLength={256}
        {...register}
        {...props}
      />
      {errorMessage && errorMessage.length > 1 && <span>{errorMessage}</span>}
    </div>
  );
}
