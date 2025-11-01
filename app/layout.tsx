import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MMA Lugano — Allenamenti di gruppo e privati",
  description:
    "Palestra di arti marziali miste a Lugano. MMA, BJJ, Striking e allenamenti personalizzati con coach professionisti. Ambiente amichevole e risultati reali.",
  keywords: [
    "MMA Lugano",
    "palestra MMA",
    "BJJ Lugano",
    "arti marziali Lugano",
    "allenamenti privati",
    "broabjj lugano",
  ],
  openGraph: {
    title: "MMA Lugano — Allenamenti di gruppo e privati",
    description:
      "Allenati con i migliori coach di arti marziali miste a Lugano. Scopri i nostri corsi di MMA, BJJ No-Gi e Striking.",
    url: "https://mma-lugano.vercel.app",
    siteName: "MMA Lugano",
    locale: "it_CH",
    type: "website",
  },
  metadataBase: new URL("https://mma-lugano.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
