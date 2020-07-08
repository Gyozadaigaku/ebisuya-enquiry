import AppBar from "@material-ui/core/AppBar";
import Ebisuya from "../assets/img/ebisuya.png";
import IconButton from "@material-ui/core/IconButton";
import Language from "@material-ui/icons/Language";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {},
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
  langIcon: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  langFont: {
    fontSize: "0.5rem",
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <img className={classes.logo} src={Ebisuya} alt="" width="40" />

          <Typography variant="h6" className={classes.title}>
            人力車のえびす屋
          </Typography>

          <IconButton
            aria-label="menu"
            className={classes.menuButton}
            color="inherit"
            edge="start"
            onClick={props.languageSettingHandleOpen}
          >
            <div className={classes.langIcon}>
              <Language />
              <span className={classes.langFont}>Language</span>
            </div>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
