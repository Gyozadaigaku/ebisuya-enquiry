import { createMuiTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import TextField from "@material-ui/core/TextField";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#C14E49",
    },
  },
});

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
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <TextField
        fullWidth
        label={props.label}
        id="standard-select-currency"
        InputLabelProps={{
          shrink: props.InputLabelProps,
        }}
        onChange={props.onChange}
        select
        value={props.value}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </ThemeProvider>
  );
};

export default SelectBox;
