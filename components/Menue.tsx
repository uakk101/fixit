import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";

const Menue = () => {
  return (
    <ul className="flex flex-col gap-3 bg-green-50 p-5 rounded-md shadow-lg w-64 right-0 ">
      {NAV_LINKS.map((link) => (
        <Link href={link.href} key={link.key} className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-gray-50">
          {link.label}
        </Link>
      ))}
    </ul>
  );
};

export default Menue;
