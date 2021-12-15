import Image from "next/image";
import Scrollbar from "../../components/Scrollbar";
import {motion} from "framer-motion"
import Head from 'next/head'
import { server } from "../../config";
import DisplayBlog from "../../components/DisplayBlog";
import dbConnect from "../../utils/dbConnection";
const blogID = ({ article, nextID, prevID }) => {
    console.log(article)
  const aritcles = article[0];
 
  return (
    <>
    <Head>
      <title>{aritcles.title}</title>
      <meta name='description' content={aritcles.description} />
      
    </Head>
      <div className="wrapper">
    
        <div className="content contents" >
        
          <motion.div className="layout" initial={{x:30,opacity:0}} animate={{x:0,opacity:1}} transition={{ duration: .5 }} exit={{x:-30,opacity:0}}>
         
         

            <div className="img-part">
           <DisplayBlog {...aritcles}/>
           <div className="hand-img">
           <Image
                  src="/heart.png"
                  width={30}
                  height={30}
                  alt="like"
                ></Image>
              </div>
            </div>


            <div className="text-part">
              <div className="year">{new Date(aritcles.date).getFullYear()}</div>
              <div className="discribe">{aritcles.description}</div>
            </div>



          </motion.div>
     
          <Scrollbar art={aritcles} nextID={nextID} prevID={prevID} />
        </div>
      </div>
    </>
  );
};

export default blogID;



export const getServerSideProps = async (context) => {
  // await dbConnect()
  const { params } = context;

  const res = await fetch(`${server}/api/blog/${params.blogID}`);

  const { article, nextID, prevID } = await res.json();
  return {
    props: {
      article,
      nextID,
      prevID,
    },
  };
};
