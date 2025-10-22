"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
  classNameIcon?: string;
  size?: ButtonProps["size"] | "iconConfig";
  variant?: ButtonProps["variant"];
  children?: React.ReactNode;
  disabled?: boolean;
}

export function CopyButton({
  disabled,
  textToCopy,
  className,
  classNameIcon,
  size = "iconConfig",
  variant = "outline",
  children,
}: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
    } catch (err: any) {
      // Handle error if needed
    }
  };

  return (
    <Button
      type="button"
      disabled={disabled}
      variant={variant}
      size={size === "iconConfig" ? "icon" : size}
      onClick={handleCopy}
      aria-label={isCopied ? "Copiado!" : "Copiar"}
      className={cn(size === "iconConfig" && "w-6 h-6 rounded-sm", className)}
    >
      {isCopied ? (
        <CheckIcon
          name="Check"
          className={cn(
            size !== "iconConfig" && children && "mr-2",
            "w-3 h-3",
            classNameIcon,
          )}
        />
      ) : (
        <CopyIcon
          name="Copy"
          className={cn(
            size !== "iconConfig" && children && "mr-2",
            "w-3 h-3",
            classNameIcon,
          )}
        />
      )}
      {children && children}
    </Button>
  );
}
