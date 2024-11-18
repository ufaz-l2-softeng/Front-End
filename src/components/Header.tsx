"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const path = usePathname();
  let name = "Nazim";
  return (
    <header
      data-testid="header"
      className="flex absolute w-full h-16 bg-gray-900 px-16 border-b-blue-600 border-b-4"
    >
      <div className="border-r-blue-800 border-r-2 pr-8">
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="logo" width={80} height={80} />
        </Link>
      </div>
      <div className="w-full pl-12 flex gap-8 items-center">
        <Link
          href={"/cases"}
          className={`text-white ${
            path == "/cases"
              ? `underline underline-offset-[26px] decoration-[3px                    ]`
              : null
          }`}
        >
          Cases
        </Link>
        <Link href={"/inventory"} className="text-white">
          Inventory
        </Link>
      </div>
      <div className="text-blue-600 flex items-center">{name}</div>
    </header>
  );
};

export default Header;
