import React from "react";
import today from "../data/today";
import Diagram from "./Diagram";

export default function DetailedInfo({ cities }) {
  const sunset = String(new Date(cities.sunset));
  const newSunset = sunset.slice(16, 34);

  return (
    <>
      <div className="date__container">
        <img
          src={`http://openweathermap.org/img/wn/${cities.weather}@4x.png`}
          alt="weather icon"
        />
        <div className="day__container">
          <p className="today">Today</p>
          <p className="today__data">{today}</p>
        </div>
      </div>
      <div className="temp__container">
        <p className="temp">{Math.round(cities.temp)}&deg;C</p>
        <p className="city__info">
          {cities.city}, {cities.country}
        </p>
        <p className="feels__like">feels like | {Math.round(cities.feels)}</p>
        <p className="sunset">sunset | {newSunset}</p>
      </div>
      <Diagram cities={cities} />
    </>
  );
}
