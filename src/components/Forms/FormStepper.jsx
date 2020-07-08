import { createMuiTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { ThemeProvider } from "@material-ui/styles";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#C14E49",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const FormStepper = (props) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <div>
        <Stepper activeStep={props.activeStep} alternativeLabel>
          {props.steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </ThemeProvider>
  );
};

export default FormStepper;
