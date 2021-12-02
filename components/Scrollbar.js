import React from "react";
import Link from "next/link";
import Image from "next/image";
import right from "../public/arrow-right.png";
import left from "../public/arrow-left.png";
import { motion } from "framer-motion";

function Scrollbar({ art, nextID, prevID }) {
  const nID = nextID[0];
  const pID = prevID[0];

  return (
    <>
      <div className="scroll-block">
        <div className="scrollText">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            {art.name}
          </motion.h2>
          <motion.h4 initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}>{art.artist.name}</motion.h4>
        </div>
        <div className="scrollControl">
          {pID != undefined ? (
            <Link href={`/gallery/${pID._id}`}>
              <a>
                <Image src={left} alt="left-arrow"/>
              </a>
            </Link>
          ) : (
            ""
          )}

          {nID != undefined ? (
            <Link href={`/gallery/${nID._id}`} replace={true}>
              <a>
                <Image src={right} alt="right-arrow"/>
              </a>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Scrollbar;
