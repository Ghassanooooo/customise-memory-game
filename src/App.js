import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import Game from "./game/game";
import jwt_decode from "jwt-decode";
import setAxiosAuth from "./setAxiosAuthHeader";
import * as actions from "./store/actions";
// import store from "./store";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

class App extends Component {
  // componentDidMount() {
  //   if (localStorage.getItem("tokenMemory")) {
  //     const token = localStorage.getItem("tokenMemory");
  //     setAxiosAuth(token);
  //     const userDecoded = jwt_decode(token);
  //     store.dispatch(actions.currentUser(userDecoded));
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Game} />
        </Switch>
      </div>
    );
  }
}

export default App;
