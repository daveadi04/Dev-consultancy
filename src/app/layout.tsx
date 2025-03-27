import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dev Consultancy | Investment & Wealth Management",
  description: "Your trusted partner in wealth management, investments, and financial consultation. Expert advisory services for stocks, mutual funds, SIPs, and more.",
  keywords: "investment planning, stock market, financial consultation, portfolio management, mutual funds, SIPs, IPOs, stock trading, wealth management, Angel Broking, Motilal Oswal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
