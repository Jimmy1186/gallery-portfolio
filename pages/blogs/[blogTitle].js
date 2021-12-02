import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import {motion} from 'framer-motion'
import {server} from "../../config/index"

function blogTitle({blog}) {
    const blogs = blog[0]

    
    return (
        <>
        <Head>
          <title>{blogs.title}</title>
          <meta name='description' content={blogs.description} />
          
        </Head>
          <div className="wrapper">
        
            <div className="content contents" >
            
              <motion.div className="layout" initial={{x:30,opacity:0}} animate={{x:0,opacity:1}} transition={{ duration: .5 }} exit={{x:-30,opacity:0}}>
                <div className="img-part">
                  {/* <DisplayCard {...blogs} /> */}
                  <div className="hand-img">
                    <Image
                      src="/assets/guernica/gallery.jpg"
                      width={60}
                      height={60}
                      alt={blogs.title}
                    ></Image>
                  </div>
                </div>
                <div className="text-part">
                  <div className="year">{blogs.date}</div>
                  <div className="discribe">{blogs.description}</div>
                </div>
              </motion.div>
         
      
            </div>
          </div>
        </>
      );
}

export default blogTitle


export const getStaticPaths = async()=>{
    const res = await fetch(`${server}/api/blogs`)
    const data = await res.json()

    const paths = data.map((blog)=>{
        return {
            params:{
                blogTitle:`${blog.title}`
            }
        }
    })
    return {
        paths:paths,
        fallback:false
    }
}

export const getStaticProps = async (context)=>{
    const { params } = context;
    const res = await fetch(`${server}/api/blogs/${params.blogTitle}`)
    const blog= await res.json()
    return {
        props:{
            blog:blog
        }
    }
}