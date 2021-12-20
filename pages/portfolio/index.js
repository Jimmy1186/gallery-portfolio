import React from "react";

import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import dbConnect from "../../utils/dbConnection";
import portfolio from "../../models/portfolio";
import DisplayPortfolio from "../../components/DisplayPortfolio";

function index({ data }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Noto+Serif+TC:wght@300;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="作品集，Jimmy Hung的個人網站" />

        <title>作品集</title>
      </Head>
      <div className="wrapper">
        <motion.div
          className="content-po"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ y: -30, opacity: 0 }}
        >
          {data
            .slice(0)
            .reverse()
            .map((portfo) => {
              return (
                <Link
                  href={`/portfolio/${encodeURIComponent(portfo._id)}`}
                  key={portfo._id}
                >
                  <a>
                    <DisplayPortfolio key={portfo._id} {...portfo} />
                  </a>
                </Link>
              );
            })}
        </motion.div>
      </div>
    </>
  );
}

export default index;

export async function getStaticProps() {
  await dbConnect();
  const portfo = await portfolio.find();

  return {
    props: {
      data: JSON.parse(JSON.stringify(portfo)),
    },
  };
}
