import Image from "next/image";
import { useEffect, useState } from "react";
import { delay } from "@/utils/delay";
import { CopyButton } from "./components/CopyButton";

interface LinkCardProps {
  urlOpen: string;
  urlCopy: string;
}

export function LinkCard({ urlCopy, urlOpen }: LinkCardProps) {
  return (
    <section className="flex flex-col w-full gap-3 p-4 border border-border bg-card rounded">
      <div className="flex flex-row gap-2.5 items-start w-full">
        <Image
          width={14}
          height={14}
          src={"icons/link-external.svg"}
          alt={""}
          className="mt-0.5 opacity-50 shrink-0"
        />
        <a
          href={urlOpen}
          target="_blank"
          className="w-full text-foreground text-sm hover:text-primary transition-colors break-all"
        >
          {urlCopy}
        </a>
      </div>
      <CopyButton textToCopy={urlCopy} variant="outline" size="sm">
        Copy Link
      </CopyButton>
    </section>
  );
}
