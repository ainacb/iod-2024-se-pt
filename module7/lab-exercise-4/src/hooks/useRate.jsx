import { useState, useEffect } from "react";

export function useRate(url, currency) {
  // state variable for holding fetched json data
  const [rate, setRate] = useState(null);

  useEffect(() => {
    if (url) {
      let ignore = false;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (!ignore) {
            setRate(json.bitcoin[currency.toLowerCase()]);
          }
        });

      // cleanup function, in case url changes before complete
      return () => {
        ignore = true;
      };
    }
  }, [url]); // re-run effect if url changes

  // return the data fetched from the given url
  return rate;
}
// save as useData.jsx in the 'hooks' folder
