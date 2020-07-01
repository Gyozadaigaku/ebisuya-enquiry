import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";

const TextInput = (props) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        KeyboardButtonProps={{
          "aria-label": "change time",
        }}
        label={props.label}
        onChange={props.onChange}
        value={props.value}
      />
    </MuiPickersUtilsProvider>
  );
};

export default TextInput;
