import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { motion, AnimatePresence } from "framer-motion";

// import Setlang from "./LanguageBtn";
function Layout() {
  const [page, setPage] = useState("works");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4 * 1000);
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            className="opening"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="logo">Welcome to my portfolio site</div>
            <div className="dot-loader">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          </motion.div>
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sidebar setPage={setPage} />
            <Content page={page} />
            {/* <Setlang /> */}
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}

export default Layout;
