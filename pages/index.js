import Head from "next/head";
import DisplayCard from "../components/DisplayCard";
import Link from "next/link";
import { motion } from "framer-motion";
import dbConnect from "../utils/dbConnection";

// import { useRouter } from "next/router";
import { server } from "../config";
const art =require('../models/art')

export default function Home({ data }) {
  // const router = useRouter();
  // const { artID } = router.query;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Noto+Serif+TC:wght@300;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="大學四年沒有朋友可憐邊緣人，喜歡打生存遊戲、自由潛水、破爛公園跟安靜的地方。這邊放一些我平常不敢發在社群軟體上的廢文哈哈。"
        />

        <title>Jimmy Hung的個人網站，Bug前端記錄，廢文存放處</title>
      </Head>

      <div className="wrapper">
      
        <motion.div
          className="content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .5 }}
          exit={{ y: -30, opacity: 0 }}
        >
          {data.map((art) => {
            return (
       
                <Link  
                  href={`/gallery/${encodeURIComponent(art._id)}`}
                  key={art._id}
                >
                  <a>
                    <DisplayCard key={art._id} {...art} />
                  </a>
                </Link>

            );
          })}
        </motion.div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  await dbConnect()
  const gallery = await art.find()



    return {
      props:{
        data:JSON.parse(JSON.stringify(gallery))
      }
    }



  // const response = await fetch(`${server}/api/gallery`);
  // const data = await response.json();

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  // return {
  //   props: { data },
  // };
}
