//layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "../Providers/ThemeRegistry";
import { AuthProvider } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Avinash Products",
  description: `Avinash Products: Your Trusted Partner for Custom Print and Gifting Solutions.
Avinash Products is a leading platform for custom printing and gifting, providing high-quality and innovative solutions tailored to your needs. With a vision to empower businesses and individuals, we bring over 15 years of expertise in the print-on-demand industry, servicing a wide range of customers from startups to global enterprises.

From business essentials like cards and brochures to personalized corporate gifts and signage, Avinash Products ensures exceptional quality and seamless service. Our user-friendly platform allows you to customize over 5000 print products and 15000 gifting items in just the right quantities to suit your requirements.

We are headquartered in India, with a state-of-the-art production facility and a commitment to delivering across India and 190 countries worldwide. Whether you're looking for employee joining kits, international event collateral, or creative marketing materials, we make it simple and hassle-free. Start with as few as one unit, and enjoy affordability without compromising on quality.

At Avinash Products, we prioritize customer satisfaction. With a promise of free replacements or full refunds, our dedicated team ensures your experience is nothing short of excellent.

Discover Avinash Products today — where ideas come to life!`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body suppressHydrationWarning
        className={cn(
          inter.variable,
          "min-h-screen w-full antialiased overflow-x-hidden" // Added overflow-x-hidden
        )}
      >        <AuthProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </AuthProvider>
      </body>
    </html>
  );
}
