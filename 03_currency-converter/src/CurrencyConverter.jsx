import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [rates, setRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      fetchRates();
    }
  }, [fromCurrency, toCurrency]);

  const fetchRates = async () => {
    try {
      const response = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${fromCurrency}.json`
      );
      const data = await response.json();
      setRates(data[fromCurrency]);
    } catch (error) {
      console.error("Error fetching currency rates:", error);
    }
  };

  const handleConversion = () => {
    if (rates[toCurrency]) {
      setConvertedAmount(amount * rates[toCurrency]);
    }
  };

  return (
    <div className="dark p-4 max-w-md mx-auto bg-light text-dark rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-semibold text-center">Currency Converter</h1>
      <div className="space-y-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
        />
        <div className="flex space-x-2">
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleConversion}
          className="w-full px-3 py-2 bg-blue-500 text-white rounded-md dark:bg-blue-700"
        >
          Convert
        </button>
        <div className="text-center">
          <p className="text-lg">
            {amount} {fromCurrency.toUpperCase()} = {convertedAmount.toFixed(2)}{" "}
            {toCurrency.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
