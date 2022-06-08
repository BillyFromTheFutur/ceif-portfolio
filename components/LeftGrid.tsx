import { Text } from "@nextui-org/react";
import React from "react";
import Typewriter from "typewriter-effect";
import styles from '../styles/LeftGrid.module.css'
import ContactCard from "./ContactCard";
const LeftGrid = () => {
  return (
    <div className={styles.containerPage}>
      <div className={styles.GreetingContainer}>
        <Text h1 className={styles.titleText} >
          <Typewriter
            options={{
              strings: ['Bienvenue ! 👋', 'Marouani Ceïf 🪴', 'Cherche une alternance 📟'],
              autoStart: true,
              loop: true,
              deleteSpeed: 150,
              //@ts-ignore
              pauseFor: 800
            }}
          />
        </Text>
      </div>
      <div className={styles.midText}>
        <h2 className={styles.titleText}>CRÉATEUR </h2>
        <p>&nbsp;</p>
        < h2 className={styles.titleTextB} >INSPIRÉ 🦅</h2>
      </div>
      <div className={styles.midText}>
        < h2 className={styles.titleTextB} >DEVELOPPEUR</h2>
        <p>&nbsp;</p>
        <h2 className={styles.titleText}>PASSIONÉ 👨‍💻</h2>
      </div>
      <div>
        <ContactCard />
      </div>

    </div>
  )
}
export default LeftGrid;
