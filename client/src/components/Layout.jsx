import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { motion, AnimatePresence } from "framer-motion";
import useIsMobile from "./isMobile";
import { RiArrowGoBackFill } from "react-icons/ri";
import { RxPinTop } from "react-icons/rx";
// import Setlang from "./LanguageBtn";

function Layout() {
  const isMobile = useIsMobile();
  const [page, setPage] = useState(() => (isMobile ? "" : "works"));
  const [isLoading, setIsLoading] = useState(true);
  console.log(page, isMobile);
  const backtotop = () => {
    // ページの一番上にスムーズスクロール
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    if (isMobile && page !== "") {
      setPage(""); // モバイルだったらページをリセットする
    }
  }, [isMobile]);
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
            {isMobile ? (
              <AnimatePresence mode="wait">
                {page === "" ? (
                  <motion.div
                    key="sidebar"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Sidebar setPage={setPage} />
                  </motion.div>
                ) : (
                  <>
                    <motion.div
                      key="spheader"
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.4 }}
                      className="spheader"
                      onClick={() => setPage("")}
                    >
                      <RiArrowGoBackFill className="spmenu" />

                      <p>My portfolio</p>
                    </motion.div>
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Content page={page} />
                    </motion.div>
                    {page !== "contact" && (
                      <motion.div
                        key="spfooter"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="spfooter"
                      >
                        {" "}
                        <RxPinTop
                          className="spfooter-topbtn"
                          onClick={backtotop}
                        />
                        <div className="spfooter-shape"></div>
                      </motion.div>
                    )}
                  </>
                )}
              </AnimatePresence>
            ) : (
              <>
                <Sidebar setPage={setPage} />
                <Content page={page} />
              </>
            )}

            {/* <Setlang /> */}
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}

export default Layout;
