import { NextPage } from "next";
import React from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const  Projects:NextPage = ()=>{
  return(
<div className={styles.container}>
      <Head>
        <title>Ceif's Portfolio</title>
        <meta name="index page" content="Hard coded by ceif" />
        <link rel="icon" href="/favicon.ico" />
     </Head>
      <main  className={styles.main}>
        <div className={styles.flotarea}>
          <h1 className={styles.floattext}>Test</h1>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>

  )
}
export default Projects
