import Image from "next/image";
import { CopyButton } from "./components/CopyButton";

interface LinkCardProps {
  url: string;
}

export function LinkCard(props: LinkCardProps) {
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
            href={props.url}
            target="_blank"
            className="max-w-[400px] w-full text-white text-base font-normal underline break-all"
          >
            {props.url}
          </a>
        </div>
      </div>
      <CopyButton />
    </section>
  );
}
