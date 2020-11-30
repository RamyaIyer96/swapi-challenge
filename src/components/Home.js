import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  componentStyle: {
    width: "18%",
    height: "88%",
    marginTop: "1%",
    padding: "0%",
  },
  button: {
    display: "table",
    margin: "0 auto",
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <div>
      {" "}
      <div className={classes.button}>
        {/* <Button component={ Link } to="/" variant="contained" color="primary"> Home</Button> */}
        <Button
          component={Link}
          to="/movies"
          variant="contained"
          color="primary"
        >
          {" "}
          Movies
        </Button>
        <Button
          component={Link}
          to="/people"
          variant="contained"
          color="primary"
        >
          {" "}
          People
        </Button>
        <Button
          component={Link}
          to="/planets"
          variant="contained"
          color="primary"
        >
          {" "}
          Planets
        </Button>
      </div>
    </div>
  );
}
