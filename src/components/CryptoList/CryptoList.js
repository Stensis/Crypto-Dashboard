import React from "react";
import { Link } from "react-router-dom";
import styles from "./CryptoList.module.css";

const CryptoList = ({ cryptos }) => {
  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.title}>🚀 Explore Top Cryptocurrencies</h1>
      <ul className={styles.cryptoContainer}>
        {cryptos?.map((crypto) => (
          <li key={crypto.id} className={styles.cryptoItem}>
            <Link to={`/crypto-details/${crypto.id}`} className={styles.linkStyle}>
              <div className={styles.logoContainer}>
                <img
                  className={styles.logo}
                  src={crypto.logoUrl || crypto.image}
                  alt={crypto.name}
                />
              </div>
              <div className={styles.details}>
                <div className={styles.name}>{crypto.name}</div>
                <div className={styles.meta}>
                  <span className={styles.symbol}>{crypto.symbol.toUpperCase()}</span>
                  <span className={styles.price}>${crypto.current_price}</span>
                </div>
                <div className={styles.changes}>
                  <span className={styles.marketCap}>Market Cap: ${crypto.market_cap}</span>
                  <span className={styles.change}>
                    {crypto.price_change_percentage_24h >= 0 ? "📈" : "📉"}
                    {crypto.price_change_percentage_24h}%
                  </span>
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
