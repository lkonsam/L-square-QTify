import React from "react";
import styles from "./Section.module.css";


export default  function Section({title, data, type}) {
    return (
        <>
            <section className={styles.section}>
                <h2>{title}</h2>
                <p>
                    Explore the latest hits, albums, and artists from your favorite artists.
                </p>
            </section>
        </>
    );
}
  