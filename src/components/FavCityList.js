import React, { useState } from "react";
import FavCityCard from "../components/FavCityCard";

export default function FavCityList({ cities }) {
  return (
    <div className="fav__city__list">
      {[cities].map((city) => (
        <FavCityCard city={city} />
      ))}
    </div>
  );
}
