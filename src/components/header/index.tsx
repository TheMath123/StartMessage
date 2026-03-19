import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";

export function Header() {
  return (
    <header className="flex flex-row items-center justify-between py-2.5 px-6 border-b border-border">
      <Link href={"/"}>
        <Image
          src="images/start-message-logo.svg"
          width={32}
          height={32}
          alt="Start Message"
        />
      </Link>

      <div className="flex flex-row gap-3 items-center">
        <Link
          target="_blank"
          href="https://github.com/TheMath123/StartMessage"
          className="flex flex-row gap-1.5 items-center text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          <Image
            src="icons/github.svg"
            width={16}
            height={16}
            alt="Logo do github"
            className="opacity-70"
          />
          <span>GitHub</span>
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}
