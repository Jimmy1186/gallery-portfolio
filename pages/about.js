import React from "react";
import Image from "next/image";
import myPhoto from "../public/myPhoto.jpg";
import { motion } from "framer-motion";
import Head from "next/head"
function about() {
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
        <meta
          name="description"
          content="關於我，Jimmy Hung的個人網站"
        />

        <title>關於我</title>
      </Head>
      <div className="wrapper">
        <motion.div
          className="content about"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ y: -30, opacity: 0 }}
        >
          <div className="top">
            <div className="my-photo">
              <Image src={myPhoto} width={960} height={1280} alt="Me" />
            </div>
            <div className="short-about">
              <h1>洪 翊銘</h1>
              <h4>專注於前端的技術和自學一些後端的架設，希望能往後端發展。</h4>
            </div>
          </div>
          <div className="middle">
            <div className="edu">
              <h3>畢業於</h3>
              <p>中華科技大學 資訊管理系</p>
            </div>
            <div className="experience">
              <h3>工作經驗</h3>
              <p>中國龍(切版) 短期</p>
              <p>中華科技大學 教育資源中心 網站維護 短期</p>
              <p>大綜電腦(硬體) 正職</p>
            </div>
            <div className="skills">
              <h3>技能</h3>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>Figma</p>
              <p>ReactJS</p>
              <p>NextJS</p>
              <p>NodeJS</p>
              <p>MongoDB</p>
              <p>套件. . .</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default about;
