import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Head from "next/head";
function MyApp({ Component, pageProps , router }) {
  return (
  <>
    <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
  <AnimatePresence exitBeforeEnter>
     <motion.div key={router.asPath}>
       <Navbar />
      <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  </>
  
  );
}

export default MyApp;
