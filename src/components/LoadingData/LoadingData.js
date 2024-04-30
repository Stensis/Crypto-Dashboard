import React from "react";
import Styles from "./LoadingData.module.css";

export function LoadingData() {
  return (
    <div className={Styles.loadingData}>
      <div className={Styles.loadingIcon}></div>
      Loading...
    </div>
  );
}
