import Link from "next/link";

export function Footer() {
  return (
    <footer className="grid place-items-center h-[40px]">
      <span className="text-text font-light text-sm">
        ©2021{" "}
        <Link href={"https://startmessage.matheuspa.com"} className="underline">
          Start Message
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
