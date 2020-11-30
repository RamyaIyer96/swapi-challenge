import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import Home from "./components/Home";
import People from "./components/People";
import Planets from "./components/Planets";
import PeopleDetail from "./components/PeopleDetail";
import PlanetDetail from "./components/PlanetDetail";
import MovieDetail from "./components/MovieDetail";
import Routes from "./routes";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Backdrop, CircularProgress } from "@material-ui/core";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function App() {
  const classes = useStyles();

 

  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Container>
          <Routes />
          {/* <Switch>
            <Route exact path="/">
              <Home />{" "}
            </Route>
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/people" component={People} />
            <Route exact path="/planets" component={Planets} />
            <Route exact path="/peopleDetail/:id" component={PeopleDetail} />
            <Route exact path="/planetDetail/:id" component={PlanetDetail} />
            <Route exact path="/movieDetail/:id" component={MovieDetail} />
          </Switch> */}
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
