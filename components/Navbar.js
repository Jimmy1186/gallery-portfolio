import React from "react";
import Link from "next/link";

function Navbar() {



  return (
    <>
      <nav>
        <Link href="/">
        <a><h1 className="mainH1">Jimmy</h1></a>
        </Link>
   
        <h3 >START SLIDESHOW</h3>
   
      </nav>
    </>
  );
}

export default Navbar;
