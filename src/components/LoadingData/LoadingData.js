import React from "react";
import Styles from "./LoadingData.module.css";

export function LoadingData() {
  return (
    <div className={Styles.loadingData}>
      <div className={Styles.loadingSpinner}></div>
      <p className={Styles.loadingText}>Fetching live data...</p>
    </div>
  );
}
