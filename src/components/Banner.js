import React from "react"

import styles from "../css/banner.module.css"

const Banner = ({ title, info, children }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.authorNameContent}>
        <span className={styles.authorNamePrefix}>Written By</span>
        <span>@Vatsal</span>
      </div>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </div>
  )
}

export default Banner
