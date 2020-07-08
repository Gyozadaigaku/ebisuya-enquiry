import { createStyles, makeStyles } from "@material-ui/core/styles";
import { deepOrange, green } from "@material-ui/core/colors";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Dialog from "@material-ui/core/Dialog";
import Gmail from "../../assets/img/gmail.svg";
import Outlook from "../../assets/img/outlook.svg";
import React from "react";
import Slide from "@material-ui/core/Slide";
import SpecialThanks from "../../assets/img/thanks.png";
import Typography from "@material-ui/core/Typography";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    homeButton: {
      justifyContent: "center",
      margin: "1rem",
    },
    mailDiv: {
      marginTop: "1rem",
    },
    mailIconList: {
      display: "flex",
      justifyContent: "space-around",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    mailIcon: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    mailMessage: {
      textAlign: "center",
      marginBottom: "0.5rem",
    },
    marginT: {
      marginTop: "1rem",
    },
    marginB: {
      marginBottom: "1rem",
    },
    media: {
      height: "150px",
      display: "block",
      margin: "0 auto 1rem",
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
    subMessage: {
      marginBottom: "2rem",
    },
    textPositon: {
      textAlign: "center",
    },
    thanksMessage: {
      margin: "0",
    },
    thanksMessageNextRow: {
      marginTop: "0",
      marginBottom: "2rem",
    },
  })
);

const Thanks = (props) => {
  const date = props.values.date;
  const submitForm = () => {
    props.setAdultsNum("");
    props.setChildrenNum("");
    props.setCustomerName("");
    props.setDate(new Date());
    props.setMeetingPlace("");
    props.setNotes("");
    props.setPhoneNum("");
    props.setStep(0);
    props.setTime(new Date());
  };

  const classes = useStyles();

  return (
    <MuiThemeProvider>
      <>
        <Dialog
          onClose={props.handleClose}
          open={props.open}
          TransitionComponent={Transition}
        >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={SpecialThanks}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  className={classes.textPositon}
                  component="h2"
                  gutterBottom
                  variant="h5"
                >
                  <h3 className={classes.thanksMessage}>ご予約</h3>
                  <h3 className={classes.thanksMessageNextRow}>
                    ありがとうっす！
                  </h3>
                </Typography>

                <Typography
                  className={classes.subMessage}
                  color="textSecondary"
                  component="p"
                  variant="body2"
                >
                  人力車のえびす屋をご利用いただきありがとうございます。おかげさまでえびす屋は昨年末に◯周年を迎えることができました。これからも一人でも多くのお客様を笑顔にできるよう精進してまいります。当日はお目にかかれるのを心から楽しみにしています！
                </Typography>
                <div className={classes.mailDiv}>
                  <Typography
                    className={classes.mailMessage}
                    color="textSecondary"
                    component="p"
                    variant="body2"
                  >
                    ご予約内容はお客様宛に送信いたしました
                  </Typography>
                  <div className={classes.mailIconList}>
                    <Avatar alt="Gmail" src={Gmail} variant="square" />
                    <Avatar alt="Outlook" src={Outlook} variant="square" />
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.homeButton}>
              <Button
                onClick={() => {
                  props.handleClose();
                  props.handleReset();
                  props.resetStep();
                }}
                size="small"
                color="primary"
              >
                ホーム画面へ
              </Button>
            </CardActions>
          </Card>
        </Dialog>
      </>
    </MuiThemeProvider>
  );
};

export default Thanks;
