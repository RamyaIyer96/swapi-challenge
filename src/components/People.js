import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { getPeople } from "../redux/thunks/thunkPeople";
import { useSelector, useDispatch } from "react-redux";
import { red } from "@material-ui/core/colors";
import {
  Card,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";
import { appName } from "../redux/store/appName";
//import peopleAction from '../redux/people/action';
//const {peopleList} = peopleAction;
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
export default function People() {
  appName.name = "People";
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);
  const peopleData = useSelector((state) => state.people);

  return (
    <>
      <h1 className={classes.centerAlign}>People</h1>
      <Card className={classes.cardStyle}>
        <List className={classes.root}>
          {peopleData &&
            peopleData.map((people, i) => {
              return (
                <>
                  <ListItem
                    alignItems="center"
                    key={i}
                    component={Link}
                    to={`/peopleDetail/${i}`}
                  >
                    <ListItemAvatar>
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        {people.name.charAt(0)}
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
                            {people.name}
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
