import DisplayCard from "../../components/DisplayCard";
import Image from "next/image";
import Link from "next/link";
import Scrollbar from "../../components/Scrollbar";
import {motion} from "framer-motion"
import Head from 'next/head'
import { server } from "../../config";
const art = require("../../models/art")
import dbConnect from "../../utils/dbConnection";

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




export const getStaticPaths = async()=>{
  await dbConnect()
  const res = await art.find()
  const gallery = JSON.parse(JSON.stringify(res))

  const paths = gallery.map((art)=>{
    return{
      params:{
        artId:art._id
      }
    }
  })
 
  return {paths,fallback:false}
}

export const getStaticProps = async (context) => {
  await dbConnect()
  const { params } = context;



  const gallery = await art
  .find({ _id: `${params.artId}` })
  .clone()
  .catch(function (err) {
    return {
      notFound: true,
    }
  });

  const nextID = await art
  .find({_id: {$gt: params.artId}}).sort({_id: 1 }).limit(1)
  .clone()
  .catch(function (err) {
    return {
      notFound: true,
    }
  });

  const prevID = await art
  .find({_id: {$lt: params.artId}}).sort({_id: -1 }).limit(1)
  .clone()
  .catch(function (err) {
    return {
      notFound: true,
    }
  });


  return {
    props:{
      art: JSON.parse(JSON.stringify(gallery)),
          nextID:JSON.parse(JSON.stringify(nextID)),
          prevID:JSON.parse(JSON.stringify(prevID)),
    }
  }


  // const res = await fetch(`${server}/api/gallery/${params.artId}`);

  // const { gallery, nextID, prevID } = await res.json();
  // return {
  //   props: {
  //     art: gallery,
  //     nextID,
  //     prevID,
  //   },
  // };
};
