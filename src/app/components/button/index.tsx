import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button({ label, ...props }: ButtonProps) {
  return (
    <button
      name={label}
      aria-label={label}
      className="w-full bg-green-500 text-neutral-800 font-bold text-lg rounded-xl py-2 px-4 hover:bg-green-600 active:bg-green-700"
      {...props}
    >
      {label}
    </button>
  );
}
