import Link from "next/link";

export function Footer() {
  return (
    <footer className="grid place-items-center h-[40px]">
      <span className="text-muted-foreground text-xs">
        ©2021{"-"}
        {new Date().getFullYear()}{" "}
        <Link href={"https://startmessage.matheuspa.com"} className="underline">
          Start Message
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
