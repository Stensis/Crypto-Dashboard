import React from "react";
import Styles from "./Error.module.css";

export function Error({ error }) {
  return (
    <div className={Styles.errorViewContainer}>
      ⚠️ {error ? `Error: ${error.message}` : "Sorry, we encountered an error while fetching cryptocurrencies."}
    </div>
  );
}
