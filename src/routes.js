import React from "react";
import { Route, Switch } from "react-router-dom";

import Movies from "./components/Movies";
import Home from "./components/Home";
import People from "./components/People";
import Planets from "./components/Planets";
import PeopleDetail from "./components/PeopleDetail";
import PlanetDetail from "./components/PlanetDetail";
import MovieDetail from "./components/MovieDetail";


export default function Routes() {
  
    return (
      <Switch>
        <Route exact path="/">
          <Home />{" "}
        </Route>
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/people" component={People} />
        <Route exact path="/planets" component={Planets} />
        <Route exact path="/peopleDetail/:id" component={PeopleDetail} />
        <Route exact path="/planetDetail/:id" component={PlanetDetail} />
        <Route exact path="/movieDetail/:id" component={MovieDetail} />
      </Switch>
    );
  }


