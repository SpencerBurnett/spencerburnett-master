import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spencerburnett.com"),
  title: {
    default: "Spencer Burnett",
    template: "%s · Spencer Burnett",
  },
  description:
    "I amplify the impact of mission-driven entrepreneurs. Build your Oracle. Own your infrastructure. Arrive at January 1, 2029 sovereign.",
  openGraph: {
    type: "website",
    siteName: "Spencer Burnett",
    title: "Spencer Burnett",
    description:
      "I amplify the impact of mission-driven entrepreneurs. Build your Oracle. Own your infrastructure. Arrive at January 1, 2029 sovereign.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-bg-base text-ink-soft antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
