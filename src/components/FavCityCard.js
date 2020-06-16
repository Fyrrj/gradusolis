import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import humidity from "../imgs/humidity.png";

export default function FavCityCard({ city }) {
  return (
    <div className="fav__city__card">
      <h3>{city.city}</h3>
      <p className="country">{city.country}</p>
      <div className="temp__container">
        <p className="temp">{Math.round(city.temp)}</p>
        <p className="metric">
          <span>&deg;</span>C
        </p>
        <img
          src={`http://openweathermap.org/img/wn/${city.weather}@2x.png`}
          alt="weather icon"
        />
      </div>
      <div className="more__info__container">
        <img src={humidity} alt="humidity" />
        <p className="hum">{city.humidity}</p>
        <FontAwesomeIcon icon={faWind} />
        <p className="wind">{city.wind}m/s</p>
      </div>
    </div>
  );
}
