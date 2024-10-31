import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graph Renderer",
  description: "Parse and render your graphs as adjacency matrices.",
};

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* not asked to change here, but for responsive design (especially on mobile), had to remove the overflow-hidden */}
      <body className={`${inter.className} h-screen`}>{children}</body>
    </html>
  );
}
