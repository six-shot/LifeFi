import type { Metadata } from "next";
import { Figtree, Sora } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const figTree = Figtree({
  variable: "--font-fig-tree",
  subsets: ["latin"],
});

const calSans = localFont({
  src: "../../public/fonts/CalSans-Regular.ttf",
  variable: "--font-cal-sans",
});
const generalSans = localFont({
  src: "../../public/fonts/GeneralSans-Medium.ttf",
  variable: "--font-general-sans",
});
const neue = localFont({
  src: "../../public/fonts/ppneuemontreal-medium.otf",
  variable: "--font-neue",
});
const sora = Sora({
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LifeFi",
  description: "Earn While You Live",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${figTree.variable} ${calSans.variable} ${generalSans.variable} ${neue.variable} ${sora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
