import { InputHTMLAttributes } from "react";

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
        className="px-6 py-3 rounded bg-input-bg text-white placeholder:text-neutral-300"
        maxLength={256}
        {...register}
        {...props}
      />
      {errorMessage && errorMessage.length > 1 && <span>{errorMessage}</span>}
    </div>
  );
}
