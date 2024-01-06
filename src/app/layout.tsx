import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PhoneContextProvider } from "@/contexts/phoneContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Start Message",
  description:
    "StartMessage generates a link to start a WhatsApp conversation from a phone number.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:type" content="website" />

        <meta
          name="keywords"
          content="Whatsapp, URL, Link, Creator, Create, Profile, Create Link, Phone, WhatsApp"
        />
        <meta
          name="description"
          content="StartMessage generates a link to start a WhatsApp conversation from a phone number."
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Start Message" />
        <meta
          name="twitter:description"
          content="StartMessage generates a link to start a WhatsApp conversation from a phone number."
        />
        <meta name="twitter:image" content="URL da Imagem em Miniatura" />

        <meta property="og:title" content="Start Message" />
        <meta
          property="og:description"
          content="StartMessage generates a link to start a WhatsApp conversation from a phone number."
        />
        <meta property="og:image" content="/start-message-logo.svg" />

        <link rel="icon" href="/web/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/web/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <PhoneContextProvider>{children}</PhoneContextProvider>
      </body>
    </html>
  );
}
