import type { Metadata } from "next";
import "./ui/global.scss";

export const metadata: Metadata = {
  title: "CIS | Home",
  description: "Communications Installation Solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
