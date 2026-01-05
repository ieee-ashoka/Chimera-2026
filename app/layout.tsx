import "./globals.css";
import { Metadata } from "next";
import LayoutWrapper from "./LayoutWrapper";

export const metadata: Metadata = {
  title: "Chimera 2025",
  description: "Chimera 2025 - IEEE Ashoka Student Branch",
  keywords: ["Chimera", "IEEE", "STEM Fest"],
  authors: [{ name: "IEEE IT" }],
  // viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://chimera.ieee-ashoka.in/",
    title: "Chimera 2025",
    description: "Chimera 2025 - IEEE Ashoka Student Branch",
    siteName: "Chimera 2025",
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "https://chimera.ieee-ashoka.in/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Chimera 2025 - IEEE Ashoka Student Branch",
      },
    ],
    title: "Chimera 2025",
    description: "Chimera 2025 - IEEE Ashoka Student Branch",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full">
      <LayoutWrapper>{children}</LayoutWrapper>
    </html>
  );
}
