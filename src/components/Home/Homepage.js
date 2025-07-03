import React, { useState, useEffect, useContext } from "react";
import { fetchCryptos } from "../../utils/api";
import CryptoList from "../CryptoList/CryptoList";
import Styles from "./Homepage.module.css";
import { LoadingData } from "../LoadingData/LoadingData";
import { Error } from "../Error/Error";
import { Pagination } from "../Pagination/Pagination";
import { CryptoContext } from "../../CryptoContext";

const Homepage = () => {
  const { cryptos, setCryptos } = useContext(CryptoContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const getCryptos = async () => {
      try {
        const data = await fetchCryptos();
        setCryptos(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cryptocurrencies:", error);
        setError(error);
        setLoading(false);
      }
    };

    getCryptos();
  }, [setCryptos]);

  // Calculate pagination parameters
  const pageSize = 12;
  const totalItems = cryptos.length;
  // const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = currentPage * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const paginatedCryptos = cryptos.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  if (loading) {
    return <LoadingData />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div>
      <div className={Styles.cryptoContainer}>
        {paginatedCryptos.length !== 0 && (
          <CryptoList cryptos={paginatedCryptos} />
        )}
      </div>
      <div className={Styles.paginationContainer}>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          dataSize={totalItems}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default Homepage;
