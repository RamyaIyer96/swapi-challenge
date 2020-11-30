import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { getPlanets } from "../redux/thunks/thunkPlanets";
import { useSelector, useDispatch } from "react-redux";
import { red } from "@material-ui/core/colors";
import {
  List,
  ListItem,
  Card,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";
import { appName } from "../redux/store/appName";

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
  cardStyle: {
    width: "29%",
    marginLeft: "37%",
  },
}));
export default function Planets() {
  appName.name = "Planets";
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlanets());
  }, [dispatch]);
  const planetsData = useSelector((state) => state.planets);

  return (
    <>
      <h1 className={classes.centerAlign}> Planets </h1>
      <Card className={classes.cardStyle}>
        <List className={classes.root} key={1}>
          {planetsData &&
            planetsData.map((planet, i) => {
              return (
                <>
                  <ListItem
                    alignItems="center"
                    key={i}
                    component={Link}
                    to={`/planetDetail/${i}`}
                  >
                    <ListItemAvatar>
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        {planet.name.charAt(0)}
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
                            {planet.name}
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
