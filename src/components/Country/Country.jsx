import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  /*   const passWithParams = () => {
    handleVisitedCountry(country);
  }; */

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3>Name: {name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Flags
      </button>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Go to Visit"}
      </button>
      {visited ? (
        <p>I have visited this country</p>
      ) : (
        <p>I want to visited this country</p>
      )}
      <hr />
      <CountryDetail
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryDetail>
    </div>
  );
};

export default Country;
