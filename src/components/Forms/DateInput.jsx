import React from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker } from "@material-ui/pickers";
import jaLocale from "date-fns/locale/ja";
import format from "date-fns/format";

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
    <MuiPickersUtilsProvider utils={ExtendedUtils} locale={jaLocale}>
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
  );
};

export default DateInput;
