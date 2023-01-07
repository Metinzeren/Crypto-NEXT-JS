import Head from "next/head";
import styles from "../styles/Home.module.css";
import Home from "./home/Home";

export default function Main() {
  return (
    <div>
      <Head>
        <title>Metin Zeren</title>
      </Head>
      <Home />
    </div>
  );
}
