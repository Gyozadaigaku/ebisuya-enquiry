import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Ebisuke from "../assets/img/ebisuke.jpg";
import NoProfile from "../assets/img/no-profile.png";

const Chat = (props) => {
  const isQuestion = props.type === "question";
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";

  return (
    <ListItem className={classes}>
      {isQuestion && (
        <ListItemAvatar>
          <Avatar alt="icon" src={Ebisuke} />
        </ListItemAvatar>
      )}
      <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
  );
};

export default Chat;
