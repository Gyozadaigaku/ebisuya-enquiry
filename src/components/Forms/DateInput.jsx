import { createMuiTheme } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker } from "@material-ui/pickers";
import format from "date-fns/format";
import jaLocale from "date-fns/locale/ja";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import React from "react";
import { ThemeProvider } from "@material-ui/styles";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#C14E49",
    },
  },
});

class ExtendedUtils extends DateFnsUtils {
  getCalendarHeaderText(date) {
    return format(date, "yyyy MMM", { locale: this.locale });
  }
  getDatePickerHeaderText(date) {
    return format(date, "MMMd日", { locale: this.locale });
  }
}

const DateInput = (props) => {
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MuiPickersUtilsProvider locale={jaLocale} utils={ExtendedUtils}>
        <DatePicker
          animateYearScrolling
          cancelLabel={props.cancelLabel}
          format={props.format}
          fullWidth
          label={props.label}
          okLabel={props.okLabel}
          onChange={props.onChange}
          value={props.value}
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default DateInput;
