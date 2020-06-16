import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import AfterSignin from "./components/AfterSignin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";
import users from "./data/users";
import gradusolisLogo from "./imgs/sunlogo.png";

function App() {
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [validation, setValidation] = useState(false);

  const validateUser = (e) => {
    e.preventDefault();
    if (userLogin === "" || userPassword === "") {
      alert("Login and password input cannot be blank !");
    }
    console.log(users);
  };

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
                validate={validateUser}
              />
            )}
          />
          <Route
            exact
            path={validation === true ? "/weather" : "/accessdenied"}
            render={(routeProps) => (
              <AfterSignin {...routeProps} login={userLogin} />
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
