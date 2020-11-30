import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Card,
  Divider,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { getPlanetDetail } from "../redux/thunks/thunkPlanets";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    display: "table",
    margin: "3% auto",
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function PlanetDetail() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let { id } = useParams();

  useEffect(() => {
    dispatch(getPlanetDetail(Number(id) + 1));
  }, [dispatch, id]);
  const planetDetail = useSelector((state) => state.planet);
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {planetDetail && planetDetail.name.charAt(0)}
            </Avatar>
          }
          title={planetDetail && planetDetail.name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Terrain: {planetDetail && planetDetail.terrain}
            <Divider />
            Population: {planetDetail && planetDetail.population}
            <Divider />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
