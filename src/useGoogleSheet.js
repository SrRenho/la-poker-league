import { useEffect, useState } from "react";
import Papa from "papaparse";

export default function useGoogleSheet() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = process.env.REACT_APP_CSV_URL;
      const response = await fetch(url);
      const text = await response.text();
      const { data } = Papa.parse(text, { header: true, skipEmptyLines: true });
      setRows(data);
    };

    fetchData();
  }, []);

  return rows;
}