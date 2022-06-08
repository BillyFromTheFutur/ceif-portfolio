import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Grid } from '@nextui-org/react'
import Image from 'next/image'
import LeftGrid from '../components/LeftGrid'
import RightGrid from '../components/RightGrid'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ceif&apos;s Portfolio</title>
        <meta name="index page" content="Hard coded by ceif" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Grid.Container justify="center" gap={2}>
          <Grid xs >
            <LeftGrid />
          </Grid>
          <Grid xs style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={styles.floatarea}>
              <Image
                //src={profile}
                src="https://cdn.discordapp.com/attachments/964974538347659324/982718661800370277/Ceif.png"
                width="480vw"
                height="650vh"
                alt="This is Ceïf"
                className={styles.floattext}
              />
            </div>
          </Grid>
          <Grid xs>
            <RightGrid />
          </Grid>
        </Grid.Container>

      </main>

    </div>
  )
}

export default Home
