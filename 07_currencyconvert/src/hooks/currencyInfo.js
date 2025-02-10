
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/cff9ff36a0a9b51c592e6e01/latest/${currency}`
        );

        // if (!response.ok) {
        //   throw new Error(`HTTP error! Status: ${response.status}`);
        // }

        const resJson = await response.json();
        setData(resJson.conversion_rates); 
      } catch (err) {}
    };

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;