// Population.jsx
import { useEffect, useState, useRef } from "react";
import { Graph } from "./Graph";
import classes from './Population.module.css';

const populationUrl = "https://countriesnow.space/api/v0.1/countries/population";

export const Population = () => {
  const [data, setData] = useState([]);
  const [population, setPopulation] = useState(null);
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");
  const ref = useRef();

  useEffect(() => {
    const fetchCountries = async () => {
      setStatus("loading");
      setErrorMessage("");

      try {
        const response = await fetch(populationUrl);

        if (!response.ok) {
          throw new Error(`Server responded with status ${response.status}`);
        }

        const result = await response.json();

        if (result.error === false && result.data) {
          setData(result.data);
          setStatus("success");
        } else {
          throw new Error(result.message || "Invalid data format from server");
        }
      } catch (err) {
        setStatus("error");
        setErrorMessage(err.message);
      }
    };

    fetchCountries();
  }, []);

  const handleChangeCountry = () => {
    const selectedCountryCode = ref.current.value;

    if (!selectedCountryCode) {
      setPopulation(null);
      return;
    }

    const selectedCountry = data.find(country => country.code === selectedCountryCode);

    if (selectedCountry && selectedCountry.populationCounts) {
      setPopulation({
        country: selectedCountry.country,
        data: selectedCountry.populationCounts.map(item => ({
          year: item.year,
          value: parseInt(item.value)
        }))
      });
    } else {
      setErrorMessage("No population data available for selected country");
    }
  };

  // Status messages
  const statusMessages = {
    loading: "Loading countries data...",
    error: `Error: ${errorMessage}`,
    idle: "Ready to load data",
    success: data.length > 0
      ? `Loaded ${data.length} countries`
      : "No country data available"
  };

  return (
    <div className={classes.container}>
      {/* Status message display */}
      <div className={`${classes.status} ${status === 'error' ? classes.error : ''}`}>
        {statusMessages[status]}
      </div>

      {status === "success" && data.length > 0 && (
        <>
          <select
            ref={ref}
            className={classes.select}
            onChange={handleChangeCountry}
            defaultValue=""
          >
            <option value="" disabled>Select a country</option>
            {data.map((d) => (
              <option key={d.code} value={d.code}>
                {d.country}
              </option>
            ))}
          </select>
          {population && <Graph population={population} />}
        </>
      )}
    </div>
  );
};