import { useEffect, useState } from "react";
import Papa from "papaparse";

export default function useGoogleSheet() {
  const [rows, setRows] = useState([]);
  const [metadata, setMetadata] = useState({ color: {}, animal: {} });

  useEffect(() => {
    const fetchData = async () => {
      const url = process.env.REACT_APP_CSV_URL;
      const response = await fetch(url);
      const text = await response.text();
      const { data } = Papa.parse(text, { header: true, skipEmptyLines: true });

      if (data.length < 3) return; // not enough rows

      // assume first row = color, second row = animal
      const colorRow = data[0];
      const animalRow = data[1];
      const actualRows = data.slice(2); // the rest is game data

      // build mapping
      const color = {};
      const animal = {};
      Object.keys(colorRow).forEach(key => {
        if (key !== "FECHA") {
          color[key] = colorRow[key];
          animal[key] = animalRow[key];
        }
      });

      setMetadata({ color, animal });
      setRows(actualRows);
    };

    fetchData();
  }, []);

  return { rows, metadata };
}
