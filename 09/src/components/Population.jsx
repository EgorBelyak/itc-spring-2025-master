import { useEffect, useState, useRef } from "react";
import { Graph } from "./Graph";
import classes from './Population.module.css';

const populationUrl = "https://countriesnow.space/api/v0.1/countries/population";

export const Population = () => {
  const [data, setData] = useState([]);
  const [population, setPopulation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const response = await fetch(populationUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (result.error === false && result.data) {
          setData(result.data);
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching countries:", err);
      } finally {
        setLoading(false);
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
    }
  };

  if (loading) return <div>Loading countries...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
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
    </div>
  );
};