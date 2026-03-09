import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Desynest — Scroll. Save. Create.",
    template: "%s | Desynest",
  },
  description:
    "The all-in-one mobile-first creative platform. Discover inspiration, design in seconds, and share with your community.",
  keywords: [
    "design",
    "creative",
    "templates",
    "AI",
    "mobile",
    "community",
    "creator",
  ],
  authors: [{ name: "Desynest Team" }],
  openGraph: {
    title: "Desynest — Scroll. Save. Create.",
    description:
      "The all-in-one mobile-first creative platform for the next generation of creators.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desynest — Scroll. Save. Create.",
    description:
      "The all-in-one mobile-first creative platform for the next generation of creators.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6366f1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
