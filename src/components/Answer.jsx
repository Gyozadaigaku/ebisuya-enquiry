import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import React from "react";

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
      onClick={() => props.select(props.content, props.nextId)}
      variant="outlined"
    >
      {props.content}
    </Button>
  );
};

export default Answer;
