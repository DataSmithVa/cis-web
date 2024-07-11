"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ContactButton } from "./buttons";
import logo from "@/public/CIS_LOGO.svg";
import menu from "@/public/menu.svg";

// Array of links to display in the navigation.
const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

// Open hamburger menu
const openMenu = (e) => {
  console.log("open menu fired");
};

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="container mx-4 my-8 flex justify-between p-4 md:mx-auto">
      <Image src={logo} alt="Logo" className="h-12 w-auto" priority />
      <div className="mr-8 grid grid-flow-col items-center gap-4 text-center">
        {links.map((link) => {
          if (link.href === "/contact") {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "hidden rounded-full border-2 border-slate-500 bg-slate-200 px-4 py-1 font-poppins text-slate-500 hover:bg-slate-500 hover:text-slate-200 md:block",
                  {
                    "text-slate-800": pathname === link.href,
                  },
                )}
              >
                <p className="hidden md:block">{link.name}</p>
              </Link>
            );
          } else {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx("font-poppins text-slate-500", {
                  "text-slate-800": pathname === link.href,
                })}
              >
                <p className="hidden md:block">{link.name}</p>
              </Link>
            );
          }
        })}
        <Image
          src={menu}
          alt="Hamburger Menu"
          className="h-10 w-auto md:hidden"
          onClick={openMenu}
        />
      </div>
    </div>
  );
}
