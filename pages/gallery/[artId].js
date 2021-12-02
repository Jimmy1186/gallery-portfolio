import DisplayCard from "../../components/DisplayCard";
import Image from "next/image";
import Link from "next/link";
import Scrollbar from "../../components/Scrollbar";
import {motion} from "framer-motion"
import Head from 'next/head'
import { server } from "../../config";

const artId = ({ art, nextID, prevID }) => {
  const arts = art[0];

  return (
    <>
    <Head>
      <title>{arts.name}</title>
      <meta name='description' content={arts.description} />
      
    </Head>
      <div className="wrapper">
    
        <div className="content contents" >
        
          <motion.div className="layout" initial={{x:30,opacity:0}} animate={{x:0,opacity:1}} transition={{ duration: .5 }} exit={{x:-30,opacity:0}}>
            <div className="img-part">
              <DisplayCard {...arts} />
              <div className="hand-img">
                <Image
                  src={arts.artist.image}
                  width={60}
                  height={60}
                  alt={arts.artist.name}
                ></Image>
              </div>
            </div>
            <div className="text-part">
              <div className="year">{arts.year}</div>
              <div className="discribe">{arts.description}</div>
              <Link href={arts.source}>
                <a className="source">
                  <p>GO TO SOURCE</p>
                </a>
              </Link>
            </div>
          </motion.div>
     
          <Scrollbar art={arts} nextID={nextID} prevID={prevID} />
        </div>
      </div>
    </>
  );
};

export default artId;



export const getServerSideProps = async (context) => {
  const { params } = context;

  const res = await fetch(`${server}/api/gallery/${params.artId}`);

  const { gallery, nextID, prevID } = await res.json();
  return {
    props: {
      art: gallery,
      nextID,
      prevID,
    },
  };
};
