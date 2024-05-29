import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./layout.module.css";
import Seo, { SeoParams } from "../../libs/seo";
import Header from "./Header";
import Footer from "./Footer";
import BottomMenu from "./BottomMenu";

function Layout({
  children,
  seo,
  header = true,
}: {
  children: React.ReactElement;
  seo: SeoParams;
  header?: boolean;
}) {
  return (
    <div>
      <Seo seo={seo} />
      {header && <Header />}
      {/* <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{
          duration: 0.5,
        }}
        className={styles.Main}
      > */}
      <div className={styles.Main__Container}>{children}</div>
      {/* </motion.main> */}
      <Footer />
      <BottomMenu />
    </div>
  );
}

export default Layout;
