import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3>Name: {name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Go to Visit"}
      </button>
      {visited ? (
        <p>I have visited this country</p>
      ) : (
        <p>I want to visited this country</p>
      )}
    </div>
  );
};

export default Country;
