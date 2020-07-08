import React from "react";
import { createMuiTheme } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import Favorite from "@material-ui/icons/AccessTime";
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#C14E49",
    },
  },
});

const TimeInput = (props) => {
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardTimePicker
          KeyboardButtonProps={{
            "aria-label": "change time",
          }}
          cancelLabel={props.cancelLabel}
          keyboardIcon={<Favorite />}
          label={props.label}
          okLabel={props.okLabel}
          onChange={props.onChange}
          value={props.value}
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default TimeInput;
