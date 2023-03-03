import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";

import MainPage from "./components/MainPage";
import UserPage from "./components/UserPage";

function App() {

  return (
    <Switch>
      <Route exact path={"/users/:id/:albumId"}>
        <UserPage />
      </Route>
      <Route exact path={"/users/:id"}>
        <UserPage />
      </Route>
      <Route exact path={"/"}>
        <MainPage />
      </Route>
    </Switch>
  );
}

export default App;
