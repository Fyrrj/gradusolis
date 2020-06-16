import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function CitySearcher({
  staticCityName,
  setStaticCityName,
  createStaticId,
  createStaticCountry,
  clear,
}) {
  const handleInputChange = (e) => {
    setStaticCityName(e.target.value.toLowerCase());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createStaticId();
    createStaticCountry();
  };

  return (
    <div className="city__searcher__container">
      <form className="city__searcher" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="city name..."
          value={staticCityName}
          onChange={handleInputChange}
          onClick={clear}
        />
        <button type="submit" className="search">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
}
