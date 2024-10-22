import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div></div>
      <Link href={"/cases"}></Link>
      <Link href={"/inventory"}></Link>
    </header>
  );
};

export default Header;
