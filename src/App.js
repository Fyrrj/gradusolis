import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import AfterSignin from "./components/AfterSignin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";
import gradusolisLogo from "./imgs/sunlogo.png";

function App() {
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <LandingPage
                {...routeProps}
                login={userLogin}
                setLogin={setUserLogin}
                password={userPassword}
                setPassword={setUserPassword}
              />
            )}
          />
          <Route
            exact
            path="/weather"
            render={(routeProps) => (
              <AfterSignin
                {...routeProps}
                login={userLogin}
                password={userPassword}
              />
            )}
          />
          <Route
            path="/"
            render={() => (
              <div className="bad__path__container">
                <img src={gradusolisLogo} alt="" />
                <h1>404</h1>
              </div>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
