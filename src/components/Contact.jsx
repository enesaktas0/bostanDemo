import React from "react";
import styles from "./Contact.module.css";
import { HiMail } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import { BiSolidPhone } from "react-icons/bi";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className="bostan-store">
        <img
          className={styles.storeImg}
          src="./bostanStore.jpeg"
          alt="store-img"
        />
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.contactType}>
          <HiMail className={styles.icon} />
          <div className={styles.info}>
            <label>Email</label>
            <a href="mailto:bostandondurmacafe@gmail.com">
              bostandondurmacafe@gmail.com
            </a>
          </div>
        </div>
        <div className={styles.contactType}>
          <BiSolidPhone className={styles.icon} />
          <div className={styles.info}>
            <label>Telefon Numarası</label>
            <a href="tel:+905347357756">0 (505) 070 53 07</a>
          </div>
        </div>
        <div className={styles.contactType}>
          <MdLocationPin className={styles.icon} />
          <div className={styles.info}>
            <label>Adres</label>
            <a>Merkez, Yunus Emre Cd. No:15 D:B, 06145 Pursaklar/Ankara</a>
          </div>
        </div>
      </div>
    </div>
  );
}
