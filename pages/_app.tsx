import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import ReactGa from 'react-ga'

function MyApp({ Component, pageProps }: AppProps) {

    useEffect(() => {
      ReactGa.initialize('G-0XTEX6VKZF');
    },[])

    return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script id="GTM" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':` +
          `new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],` +
          `j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=` +
          `'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);` +
          `})(window,document,'script','dataLayer','GTM-538NJXD');`}
      </Script>
      <Script
        id="optimize"
        strategy="afterInteractive"
        src="https://www.googleoptimize.com/optimize.js?id=OPT-5KVFPFT"
      ></Script> */}

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-93277234-2"></script>
<script dangerouslySetInnerHTML={{ __html:  `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-0XTEX6VKZF', { 'optimize_id': 'OPT-5KVFPFT'});
`}}>
</script>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
