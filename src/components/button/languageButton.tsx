"use client";

import Image from "next/image";

interface LanguagemButtonProps {
  country?: string;
}

export function LanguagemButton({ country }: LanguagemButtonProps) {
  return (
    <div className="flex flex-row gap-2 px-2 py-1 rounded-full bg-primary bg-opacity-20 hover:brightness-90 active:brightness-75">
      <Image src="icons/england.svg" width={24} height={24} alt="England" />
      {/* <Image src="icons/brazil.svg" width={24} height={24} alt="Brazil" /> */}
      {/* <Image src="icons/spain.svg" width={24} height={24} alt="Spain" /> */}
      <select
        id="language"
        name="language"
        aria-label="language"
        className="flex bg-transparent selection:bg-background "
      >
        <option value="england" defaultChecked>
          England
        </option>
        <option value="brazil">Brazil</option>
        <option value="spain">Spain</option>
      </select>

      {/* <Image src="icons/chevron-down.svg" width={24} height={24} alt="" /> */}
    </div>
  );
}
("");
