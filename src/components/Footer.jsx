import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.socialMedia}>
        <a
          href="https://www.instagram.com/bostandondurmacafe/"
          className={styles.icons}
          target="_blank"
        >
          <AiFillInstagram />
        </a>
      </div>
      <p className={styles.haklar}>
        Tüm Hakları Saklıdır | Bostan Dondurma Pasta Cafe
      </p>
    </div>
  );
}
