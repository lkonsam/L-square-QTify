import React from "react";
import styles from "./Button.module.css";


export default  function Button({ children }) {
    return <Button class={styles.button} >{children}</Button> ;
}
  