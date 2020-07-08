import Avatar from "@material-ui/core/Avatar";
import Ebisuke from "../assets/img/ebisuke.jpg";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import React from "react";
import { TypingBalls } from "./index";

const Chat = (props) => {
  const isQuestion = props.type === "question";
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";

  return (
    <>
      <ListItem className={classes}>
        {isQuestion && (
          <ListItemAvatar>
            <Avatar alt="icon" src={Ebisuke} />
          </ListItemAvatar>
        )}
        {/* {setTimeout(function () {
          return (
            <div
              className="p-chat__bubble"
              dangerouslySetInnerHTML={{ __html: props.text }}
            />
          );
        }, 1000)} */}
        {/* <div className="p-chat__typing-balls-bubble">
          <TypingBalls />
        </div> */}
        <div
          className="p-chat__bubble"
          dangerouslySetInnerHTML={{ __html: props.text }}
        />
      </ListItem>
    </>
  );
};

export default Chat;
