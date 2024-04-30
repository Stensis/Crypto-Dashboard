import React from "react";
import { Link } from "react-router-dom";
import styles from "./CryptoList.module.css"; // Import CSS module

const CryptoList = ({ cryptos }) => {
  return (
    <div>
      <ul className={styles.cryptoContainer}>
        {cryptos &&
          cryptos.map((crypto) => (
            <li key={crypto.id} className={styles.cryptoItem}>
              {/* Use styles.linkStyle instead of className="linkStyle" */}
              <Link to={`/crypto-details/${crypto.id}`} className={styles.linkStyle}>

              {/* <Link to={`/crypto-details/${crypto.id}`} className={styles.linkStyle}> */}
                <div className={styles.logoContainer}>
                  <img
                    className={styles.logo}
                    src={crypto.logoUrl}
                    alt={crypto.name}
                  />
                </div>
                <div className={styles.details}>
                  <div className={styles.row}>
                    <span className={styles.value}>{crypto.name}</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.label}>Symbol:</span>{" "}
                    <span className={styles.value}>{crypto.symbol.toUpperCase()}</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.label}>Price:</span>{" "}
                    <span className={styles.value}>{crypto.current_price}</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.label}>Market Cap:</span>{" "}
                    <span className={styles.value}>${crypto.market_cap}</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.label}>24h Change:</span>{" "}
                    <span className={styles.value}>{crypto.price_change_percentage_24h}%</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CryptoList;
