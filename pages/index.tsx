import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";

declare global {
  interface Window {
    google_optimize?: any;
    dataLayer?: any;
  }
}

const Home: NextPage = () => {
  const [variantState, setVariantState] = useState(null)

  useEffect(() => {
    const init = async() => {
      if (window.dataLayer) {
        await window.dataLayer.push({ event: "optimize.activate" });
    }
      const intervalId = setInterval(() => {
      if (window.google_optimize !== undefined) {
        const variant = window?.google_optimize?.get("GEoLHCcyS2id9fLsbvLKxg");
        setVariantState(variant);
        clearInterval(intervalId);
      }
    }, 100);
  }
  init()
  },[])

  return (
    <div className={styles.container}>
      <div>
        <h3>Home page</h3>
        <span>
        Variant:{variantState}
        </span>
      </div>
    </div>
  );
};

export default Home;
