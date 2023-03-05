import React from 'react'
import styles from "../styles/Resume.module.css"

const Resume = () => {
  return (
    <section className={styles["body"]}>
        <div className={styles["about"]}>
        <h3 className={styles["h3"]}>Resume </h3>
        <h1 className={styles["h1"]}>More of my credentials.</h1>
        <h2 className={styles["h2"]}>Here are my work experiences and education</h2>

      </div>
    </section>
  )
}

export default Resume
