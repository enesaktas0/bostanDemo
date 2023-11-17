import React from "react";
import styles from "./Menu.module.css";

export default function Menu({ menuData }) {
  const card = menuData.map((m, index) => {
    return (
      <div key={index} className={styles.card}>
        <img
          className={styles.productImage}
          src={`./${m.image}`}
          alt="product-image"
        />
        <h3> {m.name}</h3>
        <p className={styles.description}>{m.desription}</p>
        <p>
          <strong>{m.price} ₺</strong>
        </p>
      </div>
    );
  });
  return <div className={styles.menuPage}>{card}</div>;
}
