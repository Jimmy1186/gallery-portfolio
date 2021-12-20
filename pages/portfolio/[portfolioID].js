import React from 'react'
import dbConnect from "../../utils/dbConnection";
import DisplayCard from "../../components/DisplayCard";
import Image from "next/image";
import Link from "next/link";
import Scrollbar from "../../components/Scrollbar";
import {motion} from "framer-motion"
import Head from 'next/head'
import DisplayPortfolio from '../../components/DisplayPortfolio';
const portfolio = require("../../models/portfolio")


function portfolioID({ portfolio, nextID, prevID }) {
    const po = portfolio[0];

    return (
        <>
    <Head>
      <title>{po.name}</title>
      <meta name='description' content={po.description} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Noto+Serif+TC:wght@300;700&display=swap"
          rel="stylesheet"
        />
    </Head>
      <div className="wrapper">
    
        <div className="content contents" >
        
          <motion.div className="layout" initial={{x:30,opacity:0}} animate={{x:0,opacity:1}} transition={{ duration: .5 }} exit={{x:-30,opacity:0}}>
            <div className="img-part">
              <DisplayPortfolio {...po} />
              <div className="hand-img">
         <div className="block"></div>
              </div>
            </div>
            <div className="text-part">
              <div className="discribe">{po.description}</div>
              <Link href={po.link}>
                <a className="source">
                  <p>網站連結</p>
                </a>
              </Link>
            </div>
          </motion.div>
     
          <Scrollbar art={po} nextID={nextID} prevID={prevID} />
        </div>
      </div>
    </>
    )
}

export default portfolioID



export const getStaticPaths = async()=>{
    await dbConnect()
    const res = await portfolio.find()
    const portfolios = JSON.parse(JSON.stringify(res))
  
    const paths = portfolios.map((po)=>{
      return{
        params:{
          portfolioID:po._id
        }
      }
    })
   
    return {paths,fallback:false}
  }
  
  export const getStaticProps = async (context) => {
    await dbConnect()
    const { params } = context;
  
  
  
    const portfolios = await portfolio
    .find({ _id: `${params.portfolioID}` })
    .clone()
    .catch(function (err) {
      return {
        notFound: true,
      }
    });
  
    const nextID = await portfolio
    .find({_id: {$gt: params.portfolioID}}).sort({_id: 1 }).limit(1)
    .clone()
    .catch(function (err) {
      return {
        notFound: true,
      }
    });
  
    const prevID = await portfolio
    .find({_id: {$lt: params.portfolioID}}).sort({_id: -1 }).limit(1)
    .clone()
    .catch(function (err) {
      return {
        notFound: true,
      }
    });
  
  
    return {
      props:{
        portfolio: JSON.parse(JSON.stringify(portfolios)),
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
  