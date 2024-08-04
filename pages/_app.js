import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { DefaultSeo } from 'next-seo'
import Head from "next/head";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
export default function App({ Component, pageProps }) {
  const router = useRouter()
  const excludeHeaderFooter =router.pathname.startsWith('/send-verification-mail')||router.pathname.startsWith('/verifyemail') || router.pathname.startsWith("/sign-up") || router.pathname.startsWith("/forgot-password") || router.pathname.startsWith("/reset-password")||router.pathname.startsWith("/sign-in") || router.pathname.startsWith("/404");

  return(
  <>
  <DefaultSeo defaultTitle="Ecomm-website"/>
  <Head>
          <link rel="icon" href="/4.png" />
        </Head>
        {!excludeHeaderFooter&&<Navbar/>}
    <Component {...pageProps} />
    {!excludeHeaderFooter&&<Footer/>}

    <ToastContainer />
  </>
  );
}
