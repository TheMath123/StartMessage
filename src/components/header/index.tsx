import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex flex-row items-center justify-between py-4 px-16">
      <Link href={"/"}>
        <Image
          src="images/start-message-logo.svg"
          width={48}
          height={48}
          alt="Start Message"
        />
      </Link>

      <div className="flex flex-row gap-4">
        <Link
          target="_blank"
          href="https://github.com/TheMath123/StartMessage"
          className="flex flex-row gap-2 items-center hover:brightness-90 active:brightness-75"
        >
          <Image
            src="icons/github.svg"
            width={24}
            height={24}
            alt="Logo do github"
          />
          <span className="tex-text text-base font-bold">Github</span>
        </Link>
      </div>
    </header>
  );
}
