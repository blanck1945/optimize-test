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
  const [variantState, setVariantState] = useState(99);

  useEffect(() => {
    const init = async () => {
      if (window.dataLayer) {
        await window.dataLayer.push({ event: "optimize.activate" });
      }
      const intervalId = setInterval(() => {
        if (window.google_optimize !== undefined) {
          const variant = window?.google_optimize?.get(
            "GEoLHCcyS2id9fLsbvLKxg"
          );
          setVariantState(variant);
          clearInterval(intervalId);
        }
      }, 100);
    };
    init();
  }, [variantState]);

  const getVariantState = () => {
    switch (variantState) {
      case 1:
        return <a href="https://web.pency.app/">Pency</a>;
      case 2:
        return <a href="https://auntap.com/">Tap</a>;
      default:
        return <span>Loading...</span>;
    }
  };

  console.warn({ variantState });
  return (
    <div className={styles.container}>
      <div>
        <h3>Home page</h3>
        <span>Variant:{variantState}</span>
        <div style={{ marginTop: "2rem" }}>{getVariantState()}</div>
      </div>
    </div>
  );
};

export default Home;
