import { Chat } from "./index";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import React from "react";

const useStyles = makeStyles(() =>
  createStyles({
    chats: {
      height: "400px",
      padding: "0",
      overflow: "auto",
    },
  })
);

const Chats = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.chats} id={"scroll-area"}>
      {props.chats.map((chat, index) => {
        return (
          <Chat key={index.toString()} text={chat.text} type={chat.type} />
        );
      })}
    </List>
  );
};

export default Chats;
