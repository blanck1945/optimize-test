import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";

declare global {
  interface Window {
    google_optimize?: any;
    datalayer?: any;
  }
}

const Home: NextPage = () => {
  if (typeof window !== "undefined") {
    const variant = window?.google_optimize?.get("QJQgAdWsSCGtmmONfJQq8w");
    // Client-side-only code
    console.warn({ variant });
  }
  return (
    <div className={styles.container}>
      <div>
        <h3>Home page</h3>
      </div>
    </div>
  );
};

export default Home;
