import Link from "next/link";
import React from "react";
import styles from '../styles/Navbar.module.css'
import buttonStyles from '../styles/Button.module.css'
import { useRouter } from "next/router";
import { useModal } from "@nextui-org/react";
const NavBar = () => {
  const router = useRouter();
  const { setVisible, bindings } = useModal();

  return (
    <>
      <nav className={styles.navStyle}>
        <ul className={styles.navbar}>
          <li className={
            router.pathname === "/" ? buttonStyles.mybuttonSelected : buttonStyles.mybuttonUnSelected
          }><Link href="/">Acceuil</Link>
          </li>
          <li className={
            router.pathname === "/about" ? buttonStyles.mybuttonSelected : buttonStyles.mybuttonUnSelected
          }><Link href="/about">Moi</Link></li>
          <li className={
            router.pathname === "/projects" ? buttonStyles.mybuttonSelected : buttonStyles.mybuttonUnSelected
          } ><Link href=""><a onClick={() => { setVisible(true), alert("clicker") }}> Mes Projets</a></Link></li>
        </ul>
      </nav>

    </>
  )
}
export default NavBar;
