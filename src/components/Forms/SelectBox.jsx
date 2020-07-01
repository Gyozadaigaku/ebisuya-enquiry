import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const currencies = [
  {
    value: "場所A",
    label: "場所A",
  },
  {
    value: "場所B",
    label: "場所B",
  },
  {
    value: "場所C",
    label: "場所C",
  },
  {
    value: "場所D",
    label: "場所D",
  },
  {
    value: "場所E",
    label: "場所E",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const SelectBox = (props) => {
  // const classes = useStyles();
  // const [currency, setCurrency] = React.useState("場所A");

  // const handleChange = (event) => {

  //   setCurrency(event.target.value);
  // };
  console.log("gggggg");
  return (
    <TextField
      fullWidth
      InputLabelProps={{
        shrink: props.InputLabelProps,
      }}
      id="standard-select-currency"
      select
      label={props.label}
      value={props.value}
      onChange={props.onChange}
      // helperText="Please select your currency"
    >
      {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectBox;
