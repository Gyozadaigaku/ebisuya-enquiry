import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      borderColor: "#C14E49",
      color: "#C14E49",
      fontWeight: 600,
      marginBottom: "8px",
      "&:hover": {
        backgroundColor: "#C14E49",
        color: "white",
      },
    },
  })
);

const Answer = (props) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      variant="outlined"
      onClick={() => props.select(props.content, props.nextId)}
    >
      {props.content}
    </Button>
  );
};

export default Answer;
