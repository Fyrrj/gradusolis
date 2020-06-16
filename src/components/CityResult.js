import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function CityResult({
  staticCityName,
  staticCityCountry,
  addCity,
}) {
  return (
    <div className="city__result__container">
      <h2>{staticCityName},</h2>
      <p>{staticCityCountry}</p>
      <button onClick={addCity}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}
