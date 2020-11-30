import React, { useEffect, useState } from "react";
import {
  Container,
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { Class, MovieCreation, Nature, People } from "@material-ui/icons";
import { appName } from "../redux/store/appName";
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

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
export default function NavBar() {
  let app = appName.name;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon onClick={handleClick} />
          </IconButton>
          <StyledMenu
            className={classes.componentStyle}
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem component={Link} to="/movies">
              <ListItemIcon>
                <MovieCreation fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Movies" />
            </StyledMenuItem>
            <StyledMenuItem component={Link} to="/people">
              <ListItemIcon>
                <People fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="People" />
            </StyledMenuItem>
            <StyledMenuItem component={Link} to="/planets">
              <ListItemIcon>
                <Nature fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Planets" />
            </StyledMenuItem>
          </StyledMenu>
          <Typography variant="h6" className={classes.title}>
            {app}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
