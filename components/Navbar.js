import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Icon from "../public/logo.png"

function Navbar() {
  const router = useRouter();

  return (
    <>
      <nav>
        <Link href="/">
          <a className="logo">
           <Image src={Icon} width={100} height={100} alt="logo"/>
          </a>
        </Link>
        <div className="ul-block">
             <ul className="nav-lu">
          <li
            style={
              router.pathname != "/portfolio"
                ? { color: "#516673" }
                : { color: "#141f26" }
            }
          >
            <Link href="/portfolio">
              <a>作品集</a>
            </Link>
          </li>
          <li
            style={
              router.pathname != "/about"
                ? { color: "#516673" }
                : { color: "#141f26" }
            }
          >
            <Link href="/about">
              <a>關於我</a>
            </Link>
          </li>
        </ul>
        </div>
     
      </nav>
    </>
  );
}

export default Navbar;
