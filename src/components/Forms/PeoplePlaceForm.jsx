import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Slide from "@material-ui/core/Slide";
import { FormStepper, SelectBox, TextInput } from "./index";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

const TransitionFromRight = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const TransitionFromLeft = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
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
  const submitForm = () => {
    if (props.values.adultsNum == "") {
      alert("大人の人数を入力するっす！");
      return false;
    } else if (props.values.meetingPlace == "") {
      alert("待ち合わせ場所を入力するっす！");
      return false;
    } else {
      props.handleNext();
      props.nextStep();
    }
  };
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
            あともう少し！
          </DialogTitle>

          <FormStepper
            activeStep={props.activeStep}
            handleBack={props.handleBack}
            handleNext={props.handleNext}
            steps={props.steps}
          ></FormStepper>

          <DialogContent>
            <Box display="flex">
              <Box mr={1}>
                <TextInput
                  inputProps={{ inputProps: { min: 0 } }}
                  label={"大人"}
                  multiline={false}
                  onChange={props.inputAdultsNum}
                  rows={1}
                  type={"number"}
                  value={props.values.adultsNum}
                />
              </Box>

              <Box>
                <TextInput
                  inputProps={{ inputProps: { min: 0 } }}
                  label={"幼児（6歳未満）"}
                  multiline={false}
                  onChange={props.inputChildrenNum}
                  rows={1}
                  type={"number"}
                  value={props.values.childrenNum}
                />
              </Box>
            </Box>

            <SelectBox
              label={"待ち合わせ場所を選んでね"}
              onChange={props.inputMeetingPlace}
              value={props.values.meetingPlace}
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
                <Button className={classes.nextButton} onClick={submitForm}>
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
