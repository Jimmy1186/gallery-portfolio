import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps , router }) {
  return (
    <AnimatePresence exitBeforeEnter>
     <motion.div key={router.asPath}>
       <Navbar />
      <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
