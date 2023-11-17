import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Link to="/">
        <img
          className={styles.bostanLogo}
          src="./bostanLogo.png"
          alt="bostan logo"
        />
      </Link>
      <div>
        <NavLink className={styles.navLink} to="/">
          Anasayfa
        </NavLink>
        <NavLink className={styles.navLink} to="/bostanDemo/menu">
          Menü
        </NavLink>
        <NavLink className={styles.navLink} to="/bostanDemo/aboutUs">
          Hakkımızda
        </NavLink>
        <NavLink className={styles.navLink} to="/bostanDemo/contact">
          İletişim
        </NavLink>
      </div>
    </nav>
  );
}
