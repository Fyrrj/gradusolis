import React from "react";
import CityResult from "../components/CityResult";

export default function ResultList({
  staticCityId,
  staticCityName,
  staticCityCountry,
  addCity,
}) {
  return (
    <div className="result__list__container">
      {staticCityCountry !== "" ? (
        <CityResult
          staticCityId={staticCityId}
          staticCityName={staticCityName}
          staticCityCountry={staticCityCountry}
          addCity={addCity}
        />
      ) : (
        <p>No records...</p>
      )}
    </div>
  );
}
