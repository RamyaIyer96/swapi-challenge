import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPeopleDetail } from "../redux/thunks/thunkPeople";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Card, Divider } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
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

export default function PeopleDetail() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let { id } = useParams();

  useEffect(() => {
    dispatch(getPeopleDetail(Number(id) + 1));
  }, [dispatch, id]);
  const peopleDetail = useSelector((state) => state.peopleDetail);

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {peopleDetail && peopleDetail.name.charAt(0)}
            </Avatar>
          }
          title={peopleDetail && peopleDetail.name}
          subheader={peopleDetail && peopleDetail.birth_year}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Gender: {peopleDetail && peopleDetail.birth_year}
            <Divider />
            Height: {peopleDetail && peopleDetail.height}
            <Divider />
            Mass: {peopleDetail && peopleDetail.mass}
            <Divider />
            Hair Color: {peopleDetail && peopleDetail.hair_color}
            <Divider />
            Skin Color: {peopleDetail && peopleDetail.skin_color}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
