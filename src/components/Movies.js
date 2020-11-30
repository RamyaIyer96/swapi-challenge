import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { getMovies } from "../redux/thunks/thunkMovies";
import { useSelector, useDispatch } from "react-redux";
import { red } from "@material-ui/core/colors";

import {
  List,
  Card,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";
import NavBar from "./NavBar";
import { appName } from "../redux/store/appName";
//const {movieList} = movieAction;
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // paddingLeft: "500px",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    backgroundColor: red[500],
  },
  inline: {
    display: "inline",
  },
  centerAlign: {
    textAlign: "center",
  },
  cardStyle:{
    width: '29%',
    marginLeft: '37%'
  }
}));
export default function Movies() {
  appName.name = "Movies";
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  const moviesData = useSelector((state) => state.movies);

  return (
    <>
      <h1 className={classes.centerAlign}> Movies </h1>
      <Card className={classes.cardStyle}>
        <List className={classes.root}>
          {moviesData &&
            moviesData.map((movie, i) => {
              return (
                <>
                  <ListItem
                    alignItems="center"
                    key={i}
                    component={Link}
                    to={`/movieDetail/${i}`}
                  >
                    <ListItemAvatar>
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        {movie.title.charAt(0)}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {movie.title}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              );
            })}
        </List>
      </Card>
    </>
  );
}
