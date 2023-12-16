import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function CopyButton({ ...props }: CopyButtonProps) {
  return (
    <button
      {...props}
      className="flex flex-row w-full sm:w-[200px] justify-center break-keep px-4 py-3 gap-2 bg-green-500 rounded-lg hover:bg-green-600 active:bg-green-700"
      title="Copy URL"
    >
      <Image width={16} height={16} src={"icons/copy.svg"} alt={"Copy Icon"} />
      <span
        className="text-neutral-800 text-sm font-bold"
        aria-label="Copy URL"
      >
        Copy URL
      </span>
    </button>
  );
}
