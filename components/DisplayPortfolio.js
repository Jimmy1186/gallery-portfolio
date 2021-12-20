import React from 'react'
import Image from "next/image";
import { useRouter } from "next/router";
import {motion} from "framer-motion"

function DisplayPortfolio(portfo) {
const router = useRouter()

    return (
        <div className="cards">
        <div
          className="info info-po"
          style={
            router.pathname != "/portfolio" ? { background: "none", height: "100%" } : {}
          }
        >
          <motion.div
          exit={{opacity:0,height:0}}
            className={router.pathname != "/portfolio" ? "info-block-rwd info-block-rwd-po" : "info-block-po"}
            style={router.pathname != "/portfolio" ? { background: "#f2f2f2" } : {}}
          >
            <h4
              style={router.pathname != "/portfolio" ? { color: "#141f26" } : {}}
              className={router.pathname != "/portfolio" ? "h4-rwd" : ""}
            >
              {portfo.title}
            </h4>
       
          </motion.div>
        </div>
        <Image
          src={portfo.img}
          width={353}
          height={745}
          alt={portfo.title}
        />
        {router.pathname != "/portfolio" ? (
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
    )
}

export default DisplayPortfolio
