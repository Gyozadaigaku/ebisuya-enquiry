import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { DateInput, FormStepper, TimeInput } from "./index";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Slide from "@material-ui/core/Slide";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

const TransitionFromLeft = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const TransitionFromRight = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const useStyles = makeStyles(() =>
  createStyles({
    cancelButton: {
      color: "rgba(0, 0, 0, 0.54)",
    },
    marginT: {
      marginTop: "1rem",
    },
    marginB: {
      marginBottom: "1rem",
    },
    nextButton: {
      color: "#C14E49",
      backgroundColor: "white",
      border: "1px solid #C14E49",
      fontWeight: "bold",
      marginRight: "1rem",
      "&:hover": {
        color: "white",
        backgroundColor: "#C14E49",
      },
    },
    textPositon: {
      textAlign: "center",
    },
  })
);

const DateForm = (props) => {
  const classes = useStyles();

  return (
    <MuiThemeProvider>
      <>
        <Dialog
          open={props.open}
          TransitionComponent={
            props.isNextForm ? TransitionFromRight : TransitionFromLeft
          }
          onClose={props.handleClose}
        >
          <DialogTitle className={classes.textPositon + " " + classes.marginT}>
            １分でサクッと予約☆
          </DialogTitle>

          <FormStepper
            activeStep={props.activeStep}
            handleBack={props.handleBack}
            handleNext={props.handleNext}
            steps={props.steps}
          ></FormStepper>

          <DialogContent>
            <DateInput
              cancelLabel={"キャンセル"}
              format={"yyyy/MM/dd"}
              label={"日付"}
              multiline={false}
              okLabel={"決定"}
              onChange={props.inputDate}
              rows={1}
              value={props.values.date}
            />

            <TimeInput
              cancelLabel={"キャンセル"}
              id={"time"}
              label={"時間"}
              okLabel={"決定"}
              onChange={props.inputTime}
              type={"time"}
              value={props.values.time}
            />
          </DialogContent>
          <DialogActions>
            <Grid
              container
              className={classes.marginB}
              justify={"space-between"}
            >
              <Box ml={1}>
                <Button
                  className={classes.cancelButton}
                  onClick={() => {
                    props.handleBack();
                    props.prevStep();
                  }}
                >
                  戻る
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={() => {
                    props.handleNext();
                    props.nextStep();
                  }}
                  className={classes.nextButton}
                >
                  次へ
                </Button>
              </Box>
            </Grid>
          </DialogActions>
        </Dialog>
      </>
    </MuiThemeProvider>
  );
};

export default DateForm;
