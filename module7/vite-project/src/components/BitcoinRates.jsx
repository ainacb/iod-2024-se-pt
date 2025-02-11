import { useState, useEffect } from "react";
import { useRate } from "../hooks/useRate";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  // const [rate, setRate] = useState(null);

  const data = useRate(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.toLowerCase()}`,
    currency
  );
  console.log(data);
  const rate = data ? data : "not found";

  // useEffect(() => {
  //   console.log("running effect");
  //   let ignore = false;

  //   fetch(
  //     `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       if (!ignore) setRate(json.bitcoin[currency.toLowerCase()]);
  //     });

  //   return () => {
  //     ignore = true; // ignore now invalid fetch results
  //     console.log("cleanup effect");
  //   };
  // }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      {/* {JSON.stringify(currency)} */}
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <p>
        1 Bitcoin = {rate ? rate : "Loading..."} {currency}
      </p>
    </div>
  );
}
