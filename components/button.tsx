import React from "react";
import styles from '../styles/Button.module.css'

const Button = ({content}:string)=>{
  return (
  <button className={styles.mybutton}>{content}</button>
  )
}
export default Button
