import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import MenuItem from "@material-ui/core/MenuItem";

const RadioButton = (props) => {
  // const handleChange = (event) => {
  //   setExperience(event.target.value);
  // };
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">ご利用は初めてですか？</FormLabel>
      <RadioGroup
        aria-label="ご利用は初めてですか？"
        name="gender1"
        value={props.value}
        onChange={props.onChange}
        // onChange={handleChange}
      >
        <FormControlLabel value="初めて" control={<Radio />} label="はい" />
        <FormControlLabel value="2回以上" control={<Radio />} label="いいえ" />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
