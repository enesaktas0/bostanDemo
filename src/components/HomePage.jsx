import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const clickMenu = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.homePage}>
      <div className={styles.menuButton}>
        <NavLink to="/bostanDemo/menu">
          <button className={styles.btnMenu} onClick={clickMenu}>
            Menü
          </button>
        </NavLink>
      </div>
    </div>
  );
}
