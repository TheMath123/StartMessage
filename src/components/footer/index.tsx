import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex items-center justify-center border-t border-border h-10">
      <span className="text-muted-foreground text-xs">
        ©2021{"-"}
        {new Date().getFullYear()}{" "}
        <Link href={"https://startmessage.matheuspa.com"} className="hover:text-foreground transition-colors">
          Start Message
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
