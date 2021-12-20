import React from 'react'
import Head from "next/head"
import DisplayCard from '../../components/DisplayCard';
import Link from "next/link"
import {motion} from "framer-motion"
import dbConnect from '../../utils/dbConnection';
const art = require("../../models/art")
function index({data}) {
    return (
        <>
      <Head>

        <title>Gallery</title>
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
    )
}

export default index

export async function getStaticProps() {
    await dbConnect()
    const gallery = await art.find()
  
  
  
      return {
        props:{
          data:JSON.parse(JSON.stringify(gallery))
        }
      }
    }