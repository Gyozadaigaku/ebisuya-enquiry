import { createMuiTheme } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#C14E49",
    },
  },
});

const TextInput = (props) => {
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <TextField
        fullWidth
        InputLabelProps={{
          shrink: props.InputLabelProps,
        }}
        InputProps={props.inputProps}
        label={props.label}
        margin="dense"
        multiline={props.multiline}
        onChange={props.onChange}
        placeholder={props.placeholder}
        rows={props.rows}
        type={props.type}
        value={props.value}
      />
    </ThemeProvider>
  );
};

export default TextInput;
