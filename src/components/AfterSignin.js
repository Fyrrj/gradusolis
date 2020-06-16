import React, { useState, useEffect } from "react";
import axios from "axios";
import CitySearcher from "./CitySearcher";
import ResultList from "./ResultList";
import FavCityList from "./FavCityList";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import sunlogo from "../imgs/sunlogo.png";
import avatar from "../imgs/avatar.png";
import citiesList from "../data/citiesList.json";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import humidity from "../imgs/humidity.png";
import DetailedInfo from "./DetailedInfo";

export default function AfterSignin({ login }) {
  const [staticCityId, setStaticCityId] = useState(764849);
  const [staticCityName, setStaticCityName] = useState("");
  const [staticCityCountry, setStaticCityCountry] = useState("");

  const [cities, setCities] = useState([]);

  const API_KEY = "2512815e916537e0b4c34683641d8828";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?id=${staticCityId}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    axios.get(API_URL).then((res) =>
      setCities({
        cityId: res.data.id,
        city: res.data.name,
        country: res.data.sys.country,
        temp: res.data.main.temp,
        feels: res.data.main.feels_like,
        weather: res.data.weather[0].icon,
        weatherDesc: res.data.weather[0].description,
        humidity: res.data.main.humidity,
        wind: res.data.wind.speed,
        sunset: res.data.sys.sunrise,
      })
    );
  }, [API_URL]);

  const addCity = () => {
    console.log("dodaję");
  };

  function createStaticId() {
    const staticId = citiesList.filter((item) => item.name === staticCityName);
    const sCityId = staticId.map((city) => city.id);
    sCityId.length = 1;
    setStaticCityId(sCityId);
    return true;
  }

  function createStaticCountry() {
    const staticCountry = citiesList.filter(
      (item) => item.name === staticCityName
    );
    const sCityCountry = staticCountry.map((city) => city.country);
    sCityCountry.length = 1;
    setStaticCityCountry(sCityCountry);
  }

  function handleClearResults() {
    setStaticCityId(764849);
    setStaticCityName("");
    setStaticCityCountry("");
  }

  return (
    <>
      <main>
        <div className="top__bar">
          <img src={sunlogo} alt="logo" />
          <h1>
            Gradu<span>s</span>olis
          </h1>
          <CitySearcher
            staticCityName={staticCityName}
            setStaticCityName={setStaticCityName}
            createStaticId={createStaticId}
            createStaticCountry={createStaticCountry}
            clear={handleClearResults}
            staticCityId={staticCityId}
          />
        </div>
        <ResultList
          staticCityId={staticCityId}
          staticCityName={staticCityName}
          staticCityCountry={staticCityCountry}
          addCity={addCity}
        />
        <div className="fav__city__info">
          <div className="fav__city__title">
            <h2>
              Your favourite <span>cities</span>
            </h2>
            <FontAwesomeIcon icon={faLevelDownAlt} />
          </div>
        </div>
        <FavCityList addCity={addCity} cities={cities} />
      </main>
      <aside>
        <div className="welcome__container">
          <img src={avatar} alt="user avatar" />
          <h3>Hello, {login}</h3>
          <button>
            <Link to="/">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Link>
          </button>
        </div>
        <div className="detailed__info">
          <FontAwesomeIcon icon={faWind} className="top__icon" />
          <DetailedInfo cities={cities} />
          <FontAwesomeIcon icon={faWind} className="bottom__icon" />
        </div>
      </aside>
    </>
  );
}
