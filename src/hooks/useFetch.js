import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setApiData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { apiData, loading };
};

export default useFetch;
