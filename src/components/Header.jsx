import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Ebisuya from "../assets/img/ebisuya.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // height: "10vh",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bar: {
    background: "#C14E49",
  },
  logo: {
    borderRadius: "50%",
    marginRight: "0.5rem",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <img className={classes.logo} src={Ebisuya} alt="" width="40" />
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            人力車のえびす屋
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
