import { NextPage } from "next";
import React from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Grid } from "@nextui-org/react";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ceif's Portfolio</title>
        <meta name="index page" content="Hard coded by ceif" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Grid></Grid>
      </main>
    </div>

  )
}
export default About
