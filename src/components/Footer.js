import React from "react"
import links from "../constants/Links"
import { Link } from "gatsby"
import styles from "../css/footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((items, index) => {
          return (
            <Link key={index} to={items.path}>
              {items.text}
            </Link>
          )
        })}
      </div>
      <div className={styles.copyright}>
        Copyright &copy; Coding Privacy {new Date().getFullYear()} All Rights
        Reserved
      </div>
    </footer>
  )
}

export default Footer
