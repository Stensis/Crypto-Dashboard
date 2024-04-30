import React from "react";

const CryptoDetails = ({ cryptos }) => {
  console.log("Cryptos in CryptoDetails:", cryptos); 

  return (
    <div>
      <h2>Cryptocurrency Details</h2>
      <ul>
        {cryptos &&
          cryptos.map((crypto) => (
            <li key={crypto.id}>
              <img src={crypto.image} alt={crypto.name} />
              <div>
                <h3>{crypto.name}</h3>
                <p>Symbol: {crypto.symbol.toUpperCase()}</p>
                <p>Price: ${crypto.current_price}</p>
                <p>Market Cap: ${crypto.market_cap}</p>
                <p>24h Change: {crypto.price_change_percentage_24h}%</p>
                <p>Market Cap Rank: {crypto.market_cap_rank}</p>
                <p>Total Volume: ${crypto.total_volume}</p>
                <p>High 24h: ${crypto.high_24h}</p>
                <p>Low 24h: ${crypto.low_24h}</p>
                <p>Price Change 24h: ${crypto.price_change_24h}</p>
                <p>Market Cap Change 24h: ${crypto.market_cap_change_24h}</p>
                <p>Circulating Supply: {crypto.circulating_supply}</p>
                <p>Total Supply: {crypto.total_supply}</p>
                <p>Max Supply: {crypto.max_supply}</p>
                <p>All-Time High: ${crypto.ath}</p>
                <p>
                  All-Time High Change Percentage:{" "}
                  {crypto.ath_change_percentage}%
                </p>
                <p>All-Time High Date: {crypto.ath_date}</p>
                <p>All-Time Low: ${crypto.atl}</p>
                <p>
                  All-Time Low Change Percentage: {crypto.atl_change_percentage}
                  %
                </p>
                <p>All-Time Low Date: {crypto.atl_date}</p>
                <p>ROI: {crypto.roi ? JSON.stringify(crypto.roi) : ""}</p>
                <p>Last Updated: {crypto.last_updated}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CryptoDetails;
