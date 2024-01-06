import { InputHTMLAttributes, useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  tooltip?: string;
  errorMessage?: string;
  register?: any;
}

export function Input({
  label,
  tooltip,
  errorMessage,
  register,
  ...props
}: InputProps) {
  const [openTooltip, setOpenTooltip] = useState(false);

  return (
    <div className="flex flex-col w-full gap-1">
      <label
        htmlFor={label}
        className="text-base font-semibold flex flex-row gap-2 items-center"
      >
        {label}
        {tooltip && (
          <div className="flex relative">
            <span
              className={cn(
                "h-4 w-4 cursor-pointer",
                "hover:opacity-75 active:opacity-50",
                "transition-all duration-300",
              )}
              onMouseEnter={() => setOpenTooltip(true)}
              onMouseLeave={() => setOpenTooltip(false)}
            >
              <Image
                src="/icons/ic_round-info.svg"
                alt="info"
                width={16}
                height={16}
              />
            </span>
            {openTooltip && (
              <div
                className={cn(
                  "absolute top-5 w-[200px] bg-neutral-700 px-2 py-1 rounded border border-neutral-400 break-all",
                )}
              >
                <p>{tooltip}</p>
              </div>
            )}
          </div>
        )}
      </label>
      <input
        id={label}
        name={label}
        aria-label={label}
        className={cn(
          "px-6 py-3 rounded bg-input-bg text-white placeholder:text-neutral-300 border",
          "transition-all duration-300",
          "focus:border-primary focus:outline-0",
          errorMessage && errorMessage.length > 1
            ? "border-red-700"
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
