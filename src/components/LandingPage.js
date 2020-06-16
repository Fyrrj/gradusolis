import React, { useState } from "react";
import { Link } from "react-router-dom";
import sunRotate from "../imgs/sunrotate.png";
import wind from "../imgs/wind.png";
import gradusolisLogo from "../imgs/sunlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
export default function LandingPage({
  login,
  setLogin,
  password,
  setPassword,
  validate,
}) {
  return (
    <>
      <div className="about__container">
        <img src={sunRotate} alt="sun" className="img-rotate" />
        <div className="about__container__textbox">
          <h1>
            Gradu<span className="color-changer">s</span>olis
          </h1>
          <p>track the weather from Your favourite places around the world</p>
          <img src={wind} alt="wind" className="img-wind" />
        </div>
      </div>
      <div className="login__container">
        <img src={gradusolisLogo} alt="gradusolis logo" />
        <form onSubmit={validate}>
          <div className="username__input__container">
            <FontAwesomeIcon icon={faUser} />
            <input
              type="text"
              placeholder="Login..."
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div className="password__input__container">
            <FontAwesomeIcon icon={faKey} />
            <input
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">
            <Link to="/weather">sign in</Link>
          </button>
        </form>
      </div>
    </>
  );
}
