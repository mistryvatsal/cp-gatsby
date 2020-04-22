import React, { useState } from "react"
import { FaAlignRight } from "react-icons/fa"
import { Link } from "gatsby"
import styles from "../css/navbar.module.css"
import links from "../constants/Links"
import Logo from "../images/Logo_Horizontal.png"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav((isOpen) => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img
            src={Logo}
            alt="Coding Privacy's Logo"
            className={styles.navLogo}
          />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
