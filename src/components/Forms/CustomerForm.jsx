import { createStyles, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FormStepper, TextInput } from "./index";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import Slide from "@material-ui/core/Slide";
import "../../assets/styles/button.css";

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

const CustomerForm = (props) => {
  const classes = useStyles();
  const regex = /^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/;
  let tel = props.values.phoneNum.replace(/[━.*‐.*―.*－.*\-.*ー.*\-]/gi, "");

  const submitForm = () => {
    if (props.values.customerName == "") {
      alert("名前を入力するっす！");
      return false;
    } else if (props.values.customerName.length > 100) {
      alert("名前は100文字以内で入力するっす！");
      return false;
    } else if (props.values.phoneNum == "") {
      alert("電話番号を入力するっす！");
      return false;
    } else if (props.values.phoneNum.length > 100) {
      alert("電話番号は100文字以内で入力するっす！");
      return false;
    } else if (!regex.test(tel)) {
      alert("固定電話10桁〜携帯電話11桁の数値を入力するっす！");
      return false;
    } else {
      props.nextStep();
      props.handleNext();

      const formatedDate =
        props.values.date.getFullYear() +
        "/" +
        (props.values.date.getMonth() + 1) +
        "/" +
        props.values.date.getDate();

      const formatedTime =
        ("0" + props.values.time.getHours()).slice(-2) +
        ":" +
        ("0" + props.values.time.getMinutes()).slice(-2);

      let childrenNum = "";
      if (props.values.childrenNum == "") {
        childrenNum = "<幼児>\nなし\n\n";
      } else {
        childrenNum = "<幼児>\n" + props.values.childrenNum + "名\n\n";
      }

      let notes = "";
      if (props.values.notes == "") {
        notes = "<備考>\nとくになし\n\n";
      } else {
        notes = "<備考>\n" + props.values.notes + "\n\n";
      }

      const payload = {
        text:
          "お問い合わせがありました🔥\n\n" +
          "-------------------------\n" +
          "<日付>\n" +
          formatedDate +
          " " +
          formatedTime +
          "\n\n" +
          "<お客様名>\n" +
          props.values.customerName +
          "\n\n" +
          "<電話番号>\n" +
          props.values.phoneNum +
          "\n\n" +
          "<大人>\n" +
          props.values.adultsNum +
          "名\n\n" +
          childrenNum +
          "<待ち合わせ場所>\n" +
          props.values.meetingPlace +
          "\n" +
          notes +
          "-------------------------",
      };
      const url =
        "https://hooks.slack.com/services/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";

      // fetchメソッドでフォームの内容をSlackのIncoming Webhook URL に送信する
      fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
      }).then(() => {
        // alert("送信が完了しました。追ってご連絡いたします🙌");
        const date = new Date();

        props.setAdultsNum("");
        props.setChildrenNum("");
        props.setCustomerName("");
        props.setDate(new Date());
        props.setMeetingPlace("");
        props.setNotes("");
        props.setPhoneNum("");
        props.setTime(new Date());
      });
    }
  };

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
            最後です♩
          </DialogTitle>

          <FormStepper
            activeStep={props.activeStep}
            handleBack={props.handleBack}
            handleNext={props.handleNext}
            steps={props.steps}
          ></FormStepper>

          <DialogContent>
            <TextInput
              label={"名前を入力するっす"}
              multiline={false}
              onChange={props.inputCustomerName}
              rows={1}
              type={"text"}
              value={props.values.customerName}
            />

            <TextInput
              label={"電話番号を入力するっす"}
              multiline={false}
              onChange={props.inputPhoneNum}
              rows={1}
              type={"tel"}
              value={props.values.phoneNum}
            />
            <TextInput
              label={"気になることがあれば書いてね"}
              multiline={true}
              onChange={props.inputNotes}
              rows={5}
              type={"text"}
              value={props.values.notes}
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
                  onClick={() => {
                    props.handleBack();
                    props.prevStep();
                  }}
                  className={classes.cancelButton}
                >
                  戻る
                </Button>
              </Box>
              <Box>
                <Button className={classes.nextButton} onClick={submitForm}>
                  予約完了！
                </Button>
              </Box>
            </Grid>
          </DialogActions>
        </Dialog>
      </>
    </MuiThemeProvider>
  );
};

export default CustomerForm;
