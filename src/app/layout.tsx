import type { Metadata } from "next";
import { ppNeueMontreal } from "@/lib/fonts";
import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: "Frontend Assessment",
  description: "Next.js · TypeScript · GSAP · Tailwind · Recharts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ppNeueMontreal.variable}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
