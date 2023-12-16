import React, { useState, SelectHTMLAttributes } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

type OptionProps = {
  name: string;
  value?: any;
};

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: OptionProps[];
  label: string;
  tooltip?: string;
  errorMessage?: string;
  loading?: boolean;
  register?: any;
}

export function Select({
  options,
  label,
  tooltip,
  errorMessage,
  loading = false,
  register,
}: SelectProps) {
  const [openTooltip, setOpenTooltip] = useState(false);

  return (
    <div className="flex flex-col w-full gap-1 relative">
      <label
        htmlFor={label}
        className="text-base font-semibold flex flex-row gap-2 items-center"
      >
        {label}
        {tooltip && (
          <div className="flex relative w-fit">
            <span
              className={cn(
                "h-4 w-4 cursor-pointer",
                "hover:opacity-75 active:opacity-50",
                "transition-all duration-300",
              )}
              onClick={() => setOpenTooltip(!openTooltip)}
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
                onClick={() => setOpenTooltip(false)}
                className={cn(
                  "absolute top-5",
                  "flex bg-neutral-700 px-2 py-1 rounded border border-neutral-400",
                )}
              >
                {tooltip}
              </div>
            )}
          </div>
        )}
      </label>
      {loading ? (
        <div className="h-12 rounded bg-input-bg w-full flex items-center animate-pulse border border-neutral-700"></div>
      ) : (
        <select
          id={label}
          name={label}
          aria-label={label}
          disabled={loading}
          className={cn(
            "px-6 py-3 w-full h-12 rounded bg-input-bg text-white placeholder:text-neutral-300 border",
            "transition-all duration-300",
            "focus:border focus:border-primary",
            errorMessage && errorMessage.length > 1
              ? "border border-red-700"
              : "border-neutral-700",
          )}
          {...register}
        >
          {options.map((item, index) => (
            <option
              key={`dpInput${item.name.trim()}#${index}`}
              value={item.value}
            >
              {item.name}
            </option>
          ))}
        </select>
      )}
      <div className="absolute z-10 right-4 top-10 text-neutral-300">▾</div>
      {errorMessage && errorMessage.length > 1 && <span>{errorMessage}</span>}
    </div>
  );
}
