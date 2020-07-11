import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Loader from "../assets/img/loading.png";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    width: "100%",
    "& > * + *": {
      margin: 0,
    },
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="loading" />
    </div>
  );
};

export default Loading;
