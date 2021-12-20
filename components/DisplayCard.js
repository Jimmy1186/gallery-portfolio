import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {motion} from "framer-motion"

function DisplayCard(art) {
  const router = useRouter();

  return (
    <div className="cards">
      <div
        className="info info-ga"
        style={
          router.pathname != "/gallery" ? { background: "none", height: "100%" } : {}
        }
      >
        <motion.div
        exit={{opacity:0,height:0}}
          className={router.pathname != "/gallery" ? "info-block-rwd" : "info-block"}
          style={router.pathname != "/gallery" ? { background: "#f2f2f2" } : {}}
        >
          <h4
            style={router.pathname != "/gallery" ? { color: "#141f26" } : {}}
            className={router.pathname != "/gallery" ? "h4-rwd" : ""}
          >
            {art.name}
          </h4>
          <h5
            style={router.pathname != "/gallery" ? { color: "#516673" } : {}}
            className={router.pathname != "/gallery" ? "h5-rwd" : ""}
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
      {router.pathname != "/gallery" ? (
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
