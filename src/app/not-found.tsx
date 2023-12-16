"use client";

import { Header, Footer } from "@/components";
import Link from "next/link";
import { cn } from "@/utils/cn";

export default function NotFound() {
  return (
    <main className="flex flex-col w-full h-screen justify-between bg-background">
      <Header />
      <main className="w-full h-full grid place-items-center">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="font-bold text-primary text-9xl italic">404</h1>
          <h2 className="font-medium text-white text-xl text-center">
            Page Not Found
          </h2>
          <Link
            className={cn(
              "underline text-lg text-primary",
              "hover:opacity-75",
              "active:opacity-50",
            )}
            href={"/"}
          >
            Back
          </Link>
        </div>
      </main>
      <Footer />
    </main>
  );
}
