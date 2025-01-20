import React, { useState, useEffect } from "react";
import "../assets/css/currency.css";

const api_key = process.env.REACT_APP_CURRENCY_API_KEY;
//console.log(api_key);

function Currency() {
  const [kesValue, setKesValue] = useState(""); // KES input
  const [usdValue, setUsdValue] = useState(""); // USD input
  const [debouncedKes, setDebouncedKes] = useState(kesValue); // Debounced KES
  const [debouncedUsd, setDebouncedUsd] = useState(usdValue); // Debounced USD
  const [convertedKesToUsd, setConvertedKesToUsd] = useState(""); // KES -> USD
  const [convertedUsdToKes, setConvertedUsdToKes] = useState(""); // USD -> KES
  const [error, setError] = useState("");

  // Debouncing for KES input
  useEffect(() => {
    const kesHandler = setTimeout(() => {
      setDebouncedKes(kesValue);
    }, 500);

    return () => clearTimeout(kesHandler);
  }, [kesValue]);

  // Debouncing for USD input
  useEffect(() => {
    const usdHandler = setTimeout(() => {
      setDebouncedUsd(usdValue);
    }, 500);

    return () => clearTimeout(usdHandler);
  }, [usdValue]);

  // Fetch conversion for KES to USD
  useEffect(() => {
    const fetchKesToUsd = async () => {
      if (!debouncedKes) return;
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${api_key}/pair/KES/USD/${debouncedKes}`
        );
        const data = await response.json();
        if (response.ok && data.conversion_result !== undefined) {
          setConvertedKesToUsd(data.conversion_result);
          setError("");
        } else {
          throw new Error(data.error || "Failed to fetch conversion rate");
        }
      } catch (err) {
        console.error("Error fetching KES to USD:", err.message);
        setError("Unable to fetch conversion. Please try again.");
        setConvertedKesToUsd("");
      }
    };

    fetchKesToUsd();
  }, [debouncedKes]);

  // Fetch conversion for USD to KES
  useEffect(() => {
    const fetchUsdToKes = async () => {
      if (!debouncedUsd) return;
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${api_key}/pair/USD/KES/${debouncedUsd}`
        );
        const data = await response.json();
        if (response.ok && data.conversion_result !== undefined) {
          setConvertedUsdToKes(data.conversion_result);
          setError("");
        } else {
          throw new Error(data.error || "Failed to fetch conversion rate");
        }
      } catch (err) {
        console.error("Error fetching USD to KES:", err.message);
        setError("Unable to fetch conversion. Please try again.");
        setConvertedUsdToKes("");
      }
    };

    fetchUsdToKes();
  }, [debouncedUsd]);

  return (
    <>
      <div className="currency-converter">
        <h1>Currency Converter</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="converter">
          {" "}
          <div className="input-group">
            <label htmlFor="usd-input">USD</label>
            <input
              id="usd-input"
              type="number"
              value={usdValue}
              onChange={(e) => setUsdValue(e.target.value)}
              placeholder=""
            />
            {convertedUsdToKes && (
              <p className="result">
                <strong>KES.</strong>
                {convertedUsdToKes}
              </p>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="kes-input">KES</label>
            <input
              id="kes-input"
              type="number"
              value={kesValue}
              onChange={(e) => setKesValue(e.target.value)}
              placeholder=""
            />
            {convertedKesToUsd && (
              <p className="result">
                <strong>$</strong>
                {convertedKesToUsd}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Currency;
