import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CryptoContext } from "../../CryptoContext";
import styles from "./CryptoDetails.module.css";

const CryptoDetails = () => {
  const { cryptos } = useContext(CryptoContext);
  const { id: paramId } = useParams();

  return (
    <div className={styles.detailsContainer}>
      <ul className={styles.subContainer}>
        <h2 className={styles.header}>Cryptocurrency Details</h2>
        {cryptos &&
          cryptos.map((crypto) =>
            crypto.id === paramId ? (
              <li key={crypto.id} className={styles.li}>
                <div className={styles.logoContainer}>
                  <img
                    src={crypto.image}
                    alt={crypto.name}
                    className={styles.logo}
                  />
                  <h3 className={styles.name}>{crypto.name}</h3>
                </div>
                <div className={styles.cryptoItem}>
                  {/* column 1 */}
                  <div className={styles.column}>
                    <p>
                      <span className={styles.label}>Symbol:</span>{" "}
                      <span className={styles.value}>
                        {crypto.symbol.toUpperCase()}
                      </span>
                    </p>
                    <p>
                      <span className={styles.label}>Price:</span>{" "}
                      <span className={styles.value}>
                        ${crypto.current_price}
                      </span>
                    </p>
                    <p>
                      <span className={styles.label}>Market Cap:</span>{" "}
                      <span className={styles.value}>${crypto.market_cap}</span>
                    </p>
                    <p>
                      <span className={styles.label}>24h Change:</span>{" "}
                      <span className={styles.value}>
                        {crypto.price_change_percentage_24h}%
                      </span>
                    </p>
                    <p>
                      <span className={styles.label}>Market Cap Rank:</span>{" "}
                      <span className={styles.value}>
                        {crypto.market_cap_rank}
                      </span>
                    </p>
                    <p>
                      <span className={styles.label}>Total Volume:</span>{" "}
                      <span className={styles.value}>
                        ${crypto.total_volume}
                      </span>
                    </p>
                    <p>
                      <span className={styles.label}>High 24h:</span>{" "}
                      <span className={styles.value}>${crypto.high_24h}</span>
                    </p>
                    <p>
                      <span className={styles.label}>Low 24h:</span>{" "}
                      <span className={styles.value}>${crypto.low_24h}</span>
                    </p>
                    <p>
                      <span className={styles.label}>Price Change 24h:</span>{" "}
                      <span className={styles.value}>
                        ${crypto.price_change_24h}
                      </span>
                    </p>
                    <p>
                      <span className={styles.label}>
                        Market Cap Change 24h:
                      </span>{" "}
                      <span className={styles.value}>
                        ${crypto.market_cap_change_24h}
                      </span>
                    </p>
                    <p>
                      <span className={styles.label}>Circulating Supply:</span>{" "}
                      <span className={styles.value}>
                        {crypto.circulating_supply}
                      </span>
                    </p>
                    <p>
                      <span className={styles.label}>All-Time High:</span>{" "}
                      <span className={styles.value}>${crypto.ath}</span>
                    </p>
                  </div>

                  {/* column 2 */}
                  <div className={styles.column}>
                    <p>
                      <span className={styles.label}>Total Supply:</span>{" "}
                      <span className={styles.value}>
                        {crypto.total_supply}
                      </span>
                    </p>
                    <p>
                      <span className={styles.label}>Max Supply:</span>{" "}
                      <span className={styles.value}>{crypto.max_supply}</span>
                    </p>
                    <p>
                      <span className={styles.label}>All-Time High:</span>{" "}
                      <span className={styles.value}>${crypto.ath}</span>
                    </p>
                    <p>
                      <span className={styles.label}>
                        All-Time High Change Percentage:
                      </span>{" "}
                      <span className={styles.value}>
                        {crypto.ath_change_percentage}%
                      </span>
                    </p>
                    <p>
                      <span className={styles.label}>All-Time High Date:</span>{" "}
                      <span className={styles.value}>{crypto.ath_date}</span>
                    </p>
                    <p>
                      <span className={styles.label}>All-Time Low:</span>{" "}
                      <span className={styles.value}>${crypto.atl}</span>
                    </p>
                    <p>
                      <span className={styles.label}>
                        All-Time Low Change Percentage:
                      </span>{" "}
                      <span className={styles.value}>
                        {crypto.atl_change_percentage}%
                      </span>
                    </p>
                    <p>
                      <span className={styles.label}>All-Time Low Date:</span>{" "}
                      <span className={styles.value}>{crypto.atl_date}</span>
                    </p>
                    <p>
                      <span className={styles.label}>ROI:</span>{" "}
                      <span className={styles.value}>
                        {crypto.roi ? JSON.stringify(crypto.roi) : ""}
                      </span>
                    </p>
                    <p>
                      <span className={styles.label}>Last Updated:</span>{" "}
                      <span className={styles.value}>
                        {crypto.last_updated}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            ) : null
          )}
      </ul>
    </div>
  );
};

export default CryptoDetails;
