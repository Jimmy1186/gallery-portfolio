import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {motion} from "framer-motion"

function DisplayCard(art) {
  const router = useRouter();

  return (
    <div className="cards">
      <div
        className="info"
        style={
          router.pathname != "/" ? { background: "none", height: "100%" } : {}
        }
      >
        <motion.div
        exit={{opacity:0,height:0}}
          className={router.pathname != "/" ? "info-block-rwd" : "info-block"}
          style={router.pathname != "/" ? { background: "#f2f2f2" } : {}}
        >
          <h4
            style={router.pathname != "/" ? { color: "#141f26" } : {}}
            className={router.pathname != "/" ? "h4-rwd" : ""}
          >
            {art.name}
          </h4>
          <h5
            style={router.pathname != "/" ? { color: "#516673" } : {}}
            className={router.pathname != "/" ? "h5-rwd" : ""}
          >
            {art.artist.name}
          </h5>
        </motion.div>
      </div>
      <Image
        src={art.images.gallery}
        width={art.images.gallerywidth}
        height={art.images.galleryheight}
        alt={art.name}
      />
      {router.pathname != "/" ? (
        <style jsx>{`
          @media screen and (min-width: 1024px) {
            .info-block {
              background: #f2f2f2;
              position: absolute;
              top: -3px;
              left: unset;
              right: -250px;
            }
          }
        `}</style>
      ) : (
        ""
      )}
    </div>
  );
}

export default DisplayCard;
