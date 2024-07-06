import type { Metadata } from "next";
import "./ui/global.scss";
import NavLinks from "./ui/nav_links";

export const metadata: Metadata = {
  title: {
    template: "CIS | %s",
    default: "CIS | Home",
  },
  description: "Communications Installation Solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavLinks />
        {children}
      </body>
    </html>
  );
}
