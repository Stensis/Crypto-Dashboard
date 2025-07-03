import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CryptoContext } from "../../CryptoContext";
import styles from "./CryptoDetails.module.css";

const CryptoDetails = () => {
  const { cryptos } = useContext(CryptoContext);
  const { id: paramId } = useParams();

  const crypto = cryptos?.find((crypto) => crypto.id === paramId);

  if (!crypto) {
    return <div className={styles.notFound}>Crypto not found</div>;
  }

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.header}>
        <img src={crypto.image} alt={crypto.name} className={styles.logo} />
        <h2 className={styles.name}>{crypto.name}</h2>
      </div>

      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <h3>Market Info</h3>
          <p><strong>Symbol:</strong> {crypto.symbol.toUpperCase()}</p>
          <p><strong>Price:</strong> ${crypto.current_price}</p>
          <p><strong>Market Cap:</strong> ${crypto.market_cap}</p>
          <p><strong>24h Change:</strong> {crypto.price_change_percentage_24h}%</p>
          <p><strong>Market Cap Rank:</strong> {crypto.market_cap_rank}</p>
          <p><strong>Total Volume:</strong> ${crypto.total_volume}</p>
        </div>

        <div className={styles.card}>
          <h3>Price Ranges</h3>
          <p><strong>High 24h:</strong> ${crypto.high_24h}</p>
          <p><strong>Low 24h:</strong> ${crypto.low_24h}</p>
          <p><strong>Price Change 24h:</strong> ${crypto.price_change_24h}</p>
          <p><strong>Market Cap Change 24h:</strong> ${crypto.market_cap_change_24h}</p>
          <p><strong>Circulating Supply:</strong> {crypto.circulating_supply}</p>
        </div>

        <div className={styles.card}>
          <h3>All-Time Stats</h3>
          <p><strong>ATH:</strong> ${crypto.ath}</p>
          <p><strong>ATH Change %:</strong> {crypto.ath_change_percentage}%</p>
          <p><strong>ATH Date:</strong> {crypto.ath_date}</p>
          <p><strong>ATL:</strong> ${crypto.atl}</p>
          <p><strong>ATL Change %:</strong> {crypto.atl_change_percentage}%</p>
          <p><strong>ATL Date:</strong> {crypto.atl_date}</p>
        </div>

        <div className={styles.card}>
          <h3>Other</h3>
          <p><strong>Total Supply:</strong> {crypto.total_supply}</p>
          <p><strong>Max Supply:</strong> {crypto.max_supply}</p>
          <p><strong>ROI:</strong> {crypto.roi ? JSON.stringify(crypto.roi) : "N/A"}</p>
          <p><strong>Last Updated:</strong> {crypto.last_updated}</p>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
