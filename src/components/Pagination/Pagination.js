import React from "react";
import Styles from "./Pagination.module.css";

export function Pagination({ onPageChange, currentPage, dataSize, pageSize }) {
  return (
    <div className={Styles.paginationContainer}>
      {Array.from({ length: Math.ceil(dataSize / pageSize) }).map(
        (_, index) => (
          <button
            key={index}
            className={`${Styles.buttonPage} ${
              currentPage === index ? Styles.activeButton : ""
            }`}
            onClick={() => onPageChange(index)}
            type="button"
          >
            {index + 1}
          </button>
        )
      )}
    </div>
  );
}
