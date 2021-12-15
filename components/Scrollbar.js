import React from "react";
import Link from "next/link";
import Image from "next/image";
import right from "../public/arrow-right.png";
import left from "../public/arrow-left.png";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function Scrollbar({ art, nextID, prevID }) {
  const nID = nextID[0];
  const pID = prevID[0];
  const router = useRouter()
 

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
            {art.name!=undefined? (`${art.name}`):(art.title)}
          </motion.h2>
          <motion.h4 initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}>{art.artist!=undefined?(`${art.artist.name}`):""}</motion.h4>
        </div>
        <div className="scrollControl">
          {pID != undefined ? (
            <Link href={`${pID._id}`}  replace={true}>
              <a>
                <Image src={left} alt="left-arrow"/>
              </a>
            </Link>
          ) : (
            ""
          )}

          {nID != undefined ? (
            <Link href={`${nID._id}`} replace={true}>
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
