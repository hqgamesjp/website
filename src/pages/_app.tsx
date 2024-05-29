import "../styles/reset.css";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import usePageView from "../hooks/usePageView";
import GoogleAnalytics from "../components/common/GoogleAnalytics";
import { GlobalStateProvider } from "../context/globalStateProvider";

function MyApp({ Component, pageProps, router }: AppProps) {
  usePageView();
  return (
    <>
      <GoogleAnalytics />
      <GlobalStateProvider>
        {/* <AnimatePresence
          mode="wait"
          exitBeforeEnter
          onExitComplete={() => window.scrollTo(0, 0)}
        > */}
        <Component {...pageProps} key={router.route} />
        {/* </AnimatePresence> */}
      </GlobalStateProvider>
    </>
  );
}

export default MyApp;
