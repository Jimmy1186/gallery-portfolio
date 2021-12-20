import Image from "next/image";
import Scrollbar from "../../components/Scrollbar";
import {motion} from "framer-motion"
import Head from 'next/head'
import { server } from "../../config";
import DisplayBlog from "../../components/DisplayBlog";
import dbConnect from "../../utils/dbConnection";
const blog = require("../../models/blog")


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

export const getStaticPaths = async()=>{
  await dbConnect()
  const res = await blog.find()
  const blogs = JSON.parse(JSON.stringify(res))

  const paths = blogs.map((blog)=>{
    return{
      params:{
        blogID:blog._id
      }
    }
  })
 
  return {paths,fallback:false}
}

export const getStaticProps = async (context) => {
  await dbConnect()
  const { params } = context;

  const article = await blog
    .find({ _id: `${params.blogID}` })
    .clone()
    .catch(function (err) {
      return {
        notFound: true,
      }
    });

    const nextID = await blog
    .find({_id: {$gt: params.blogID}}).sort({_id: 1 }).limit(1)
    .clone()
    .catch(function (err) {
      return {
        notFound: true,
      }
    });

    const prevID = await blog
    .find({_id: {$lt: params.blogID}}).sort({_id: -1 }).limit(1)
    .clone()
    .catch(function (err) {
      return {
        notFound: true,
      }
    });


  return {
    props: {
      article: JSON.parse(JSON.stringify(article)),
      nextID:JSON.parse(JSON.stringify(nextID)),
      prevID:JSON.parse(JSON.stringify(prevID)),
    },
  };
};
