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
    <section className="flex flex-col w-full max-w-2xl gap-8 p-8 border border-text border-opacity-20 bg-background rounded-lg items-center justify-center sm:flex-row">
      <div className="flex flex-row gap-4 w-full">
        <Image
          width={24}
          height={24}
          src={"icons/link-external.svg"}
          alt={""}
        />
        <div className="w-full">
          <a
            href={urlOpen}
            target="_blank"
            className="max-w-[400px] w-full text-foreground text-base font-normal underline break-all"
          >
            {urlCopy}
          </a>
        </div>
      </div>
      <div className="relative">
        <CopyButton
          textToCopy={urlCopy}
          variant='default'
          size='default'
        >
          Copy Link
        </CopyButton>

      </div>
    </section>
  );
}
