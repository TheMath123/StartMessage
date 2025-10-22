import Image from "next/image";
import { cn } from "@/utils/cn";

interface InformationTooltipProps {
  label: string;
  className?: string;
}
export function Tooltip({ label, className }: InformationTooltipProps) {
  return (
    <div
      className={cn(
        className,
        "relative flex h-4 w-4 items-center justify-center",
        "before:absolute before:left-4 before:top-4 before:bg-background before:content-[attr(aria-label)]",
        "before:pointer-events-none before:rounded-sm before:border before:border-text before:p-1 before:shadow-xs",
        "before:opacity-0 before:transition-all before:duration-200 before:ease-linear",
        "hover:before:opacity-100",
      )}
      aria-label={label}
    >
      <Image src="/icons/ic_round-info.svg" alt="info" width={16} height={16} />
    </div>
  );
}
