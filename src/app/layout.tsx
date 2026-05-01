import type { Metadata } from "next";
import { Geist, Geist_Mono, Aref_Ruqaa, Great_Vibes } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const arefRuqaa = Aref_Ruqaa({
  weight: ['400', '700'], // Aref Ruqaa supports 400 and 700
  subsets: ['arabic', 'latin'],
  display: 'swap',
  variable: '--font-aref-ruqaa', // Useful for Tailwind integration
});
export const greatVibes = Great_Vibes({
  weight: ['400'], // Aref Ruqaa supports 400 and 700
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-great-vibes', // Useful for Tailwind integration
});

export const metadata: Metadata = {
  title: "Farouk & Menna | Wedding",
  description: "This is a digital wedding invetation for farouk & menna wedding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={arefRuqaa.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${arefRuqaa.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
