import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import React from "react";

const RadioButton = (props) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">ご利用は初めてですか？</FormLabel>
      <RadioGroup
        aria-label="ご利用は初めてですか？"
        name="gender1"
        onChange={props.onChange}
        value={props.value}
      >
        <FormControlLabel control={<Radio />} label="はい" value="初めて" />
        <FormControlLabel control={<Radio />} label="いいえ" value="2回以上" />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
