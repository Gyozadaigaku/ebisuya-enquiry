import AmericanFlag from "../assets/img/united-states.svg";
import Box from "@material-ui/core/Box";
import BritishFlag from "../assets/img/united-kingdom.svg";
import Button from "@material-ui/core/Button";
import ChineseFlag from "../assets/img/china.svg";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import JapaneseFlag from "../assets/img/japan.svg";
import React from "react";
import Slide from "@material-ui/core/Slide";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

const TransitionFromTop = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="bottom" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) =>
  createStyles({
    marginT: {
      marginTop: "1rem",
    },
    marginB: {
      marginBottom: "1rem",
    },
    backButton: {
      color: "rgba(0, 0, 0, 0.54)",
    },
    textPositon: {
      textAlign: "center",
    },
    langFont: {
      fontSize: "0.8rem",
    },
  })
);

const LanguageList = (props) => {
  const classes = useStyles();

  return (
    <MuiThemeProvider>
      <>
        <Dialog
          open={props.languageSettingOpen}
          TransitionComponent={TransitionFromTop}
          onClose={props.languageSettingHandleClose}
        >
          <DialogTitle className={classes.textPositon + " " + classes.marginT}>
            Select language
          </DialogTitle>

          <DialogContent>
            <React.Fragment>
              <Grid container spacing={3}>
                <Grid item xs={6} className={classes.textPositon}>
                  <img src={JapaneseFlag} alt="Japanese flag" />
                  <span className={classes.langFont}>Japanese</span>
                </Grid>
                <Grid item xs={6} className={classes.textPositon}>
                  <img src={ChineseFlag} alt="Chinese flag" />
                  <span className={classes.langFont}>Chinese</span>
                </Grid>
                <Grid item xs={6} className={classes.textPositon}>
                  <img src={AmericanFlag} alt="American flag" />
                  <span className={classes.langFont}>English</span>
                </Grid>
                <Grid item xs={6} className={classes.textPositon}>
                  <img src={BritishFlag} alt="British flag" />
                  <span className={classes.langFont}>English</span>
                </Grid>
              </Grid>
            </React.Fragment>
          </DialogContent>
          <DialogActions>
            <Grid container justify={"center"} className={classes.marginB}>
              <Box>
                <Button
                  onClick={props.languageSettingHandleClose}
                  className={classes.backButton}
                >
                  戻る
                </Button>
              </Box>
            </Grid>
          </DialogActions>
        </Dialog>
      </>
    </MuiThemeProvider>
  );
};

export default LanguageList;
