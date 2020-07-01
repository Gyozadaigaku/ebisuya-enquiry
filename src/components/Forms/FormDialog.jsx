import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  DateInput,
  RadioButton,
  SelectBox,
  TextInput,
  TimeInput,
} from "./index";

export default class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    // const date = new Date();
    // const initializedDate =
    //   date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    // console.log("datadate");
    // console.log(date);
    // console.log(date.getHours());
    // if(zi >= 0 && zi <= 11){　　　　　　　// もし、時刻が 0 ~ 11 だったらAM
    //   　　　ampm = "AM ";
    //   }else{
    //   　　　ampm = "PM ";　　　　　　　　// 12 ~ 23 だったらPM
    //   　　　zi = zi - 12;　　　　　　　　　　 // 12引いて、12時間表記にする
    //   }
    this.state = {
      adultsNum: "",
      childrenNum: "",
      customerName: "",
      date: new Date(),
      time: new Date(),
      meetingPlace: "",
      notes: "",
      phoneNum: "",
    };

    // this.handleC ption = this.inputDescription.bind(this);
    this.inputAdultsNum = this.inputAdultsNum.bind(this);
    this.inputChildrenNum = this.inputChildrenNum.bind(this);
    this.inputCustomerName = this.inputCustomerName.bind(this);
    this.inputDate = this.inputDate.bind(this);
    this.inputMeetingPlace = this.inputMeetingPlace.bind(this);
    this.inputNotes = this.inputNotes.bind(this);
    this.inputPhoneNum = this.inputPhoneNum.bind(this);
    this.inputTime = this.inputTime.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  // Functions triggered by inputting text value
  inputAdultsNum = (event) => {
    this.setState({ adultsNum: event.target.value });
  };
  inputChildrenNum = (event) => {
    this.setState({ childrenNum: event.target.value });
  };
  inputCustomerName = (event) => {
    this.setState({ customerName: event.target.value });
  };
  inputDate = (event) => {
    const date =
      event.getFullYear() +
      "/" +
      (event.getMonth() + 1) +
      "/" +
      event.getDate();
    this.setState({ date: event });
  };
  inputMeetingPlace = (event) => {
    console.log("tatatata");
    console.log(event.target.value);
    this.setState({ meetingPlace: event.target.value });
  };
  inputNotes = (event) => {
    this.setState({ notes: event.target.value });
  };
  inputPhoneNum = (event) => {
    this.setState({ phoneNum: event.target.value });
  };

  inputTime = (event) => {
    this.setState({ time: event });
  };

  validatedateFormat = (date) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(date);
  };

  validateRequiredInput = (...args) => {
    let isBlank = false;
    for (let i = 0; i < args.length; i = (i + 1) | 0) {
      if (args[i] === "") {
        isBlank = true;
      }
    }
    return isBlank;
  };

  // Slackに問い合わせがあったことを通知する
  submitForm = () => {
    console.log("aaaaaaaaaaaaaaaaaaaaa");
    const adultsNum = this.state.adultsNum;
    const childrenNum = this.state.childrenNum;
    const customerName = this.state.customerName;
    const date = this.state.date;
    const meetingPlace = this.state.meetingPlace;
    const notes = this.state.notes;
    const phoneNum = this.state.phoneNum;
    const time = this.state.time;

    const isBlank = this.validateRequiredInput(
      adultsNum,
      childrenNum,
      customerName,
      date,
      meetingPlace,
      notes,
      phoneNum,
      time
    );
    // const isValiddate = this.validatedateFormat(date);

    if (isBlank) {
      // console.log("bbbbbbbbbbbbbbbbbb");
      alert("必須入力欄が空白です。");
      return false;
      // } else if (!isValiddate) {
      //   console.log("cccccccccccccccc");
      // alert("メールアドレスの書式が異なります。");
      // return false;
    }
    // else if (!isValidEmail) {
    //   alert("メールアドレスの書式が異なります。");
    //   return false;
    // }
    else {
      // const aaa = date.getFullYear();
      const formatedDate =
        date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
      console.log("time");
      // console.log(event);
      // console.log(("0" + event.getHours()).slice(-2));
      // console.log(("0" + event.getMinutes()).slice(-2));
      const formatedTime =
        ("0" + time.getHours()).slice(-2) +
        ":" +
        ("0" + time.getMinutes()).slice(-2);
      const payload = {
        text:
          "お問い合わせがありました🔥\n" +
          "お客様名: " +
          customerName +
          "\n" +
          "電話番号: " +
          phoneNum +
          "\n" +
          "日付: " +
          formatedDate +
          " " +
          formatedTime +
          "\n" +
          "大人: " +
          adultsNum +
          "名\n" +
          "幼児: " +
          childrenNum +
          "名\n" +
          "待ち合わせ場所: " +
          meetingPlace +
          "備考: " +
          notes,
        // "\n" +
        // "【問い合わせ内容】\n" +
        // notes,
      };

      const url =
        "https://hooks.slack.com/services/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";

      // fetchメソッドでフォームの内容をSlackのIncoming Webhook URL に送信する
      fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
      }).then(() => {
        alert("送信が完了しました。追ってご連絡いたします🙌");
        const date = new Date();
        const initializedDate =
          date.getFullYear() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getDate();
        this.setState({
          adultsNum: "",
          childrenNum: "",
          customerName: "",
          date: initializedDate,
          meetingPlace: "",
          notes: "",
          phoneNum: "",
          time: new Date(),
        });
        return this.props.handleClose();
      });
    }
  };

  render() {
    return (
      <Dialog open={this.props.open} onClose={this.handleClose}>
        <DialogTitle>予約フォーム</DialogTitle>
        <DialogContent>
          <TextInput
            label={"名前を入力してね"}
            multiline={false}
            rows={1}
            value={this.state.customerName}
            type={"text"}
            onChange={this.inputCustomerName}
          />
          {/* <TextInput
            InputLabelProps={true} // アニメーションしないようにする
            label={"予約する日付と時間を入力してね"}
            multiline={false}
            rows={1}
            value={this.state.date}
            type={"date"}
            onChange={this.inputDate}
          /> */}
          <DateInput
            multiline={false}
            rows={1}
            label={"日付"}
            okLabel={"決定"}
            cancelLabel={"キャンセル"}
            value={this.state.date}
            format={"yyyy/MM/dd"}
            // type={"date"}
            onChange={this.inputDate}
          />
          <TimeInput
            // multiline={false}
            // rows={1}
            label={"時間"}
            value={this.state.time}
            // format={"yyyy/MM/dd"}
            // type={"date"}
            onChange={this.inputTime}
          />

          <TextInput
            label={"大人"}
            multiline={false}
            rows={1}
            value={this.state.adultsNum}
            type={"number"}
            onChange={this.inputAdultsNum}
          />

          <TextInput
            label={"幼児（6歳未満）"}
            multiline={false}
            rows={1}
            value={this.state.childrenNum}
            type={"number"}
            onChange={this.inputChildrenNum}
          />

          <SelectBox
            label={"待ち合わせ場所を選んでね"}
            onChange={this.inputMeetingPlace}
            value={this.state.meetingPlace}
          />

          <TextInput
            label={"電話番号を入力してね"}
            multiline={false}
            rows={1}
            value={this.state.phoneNum}
            type={"tel"}
            onChange={this.inputPhoneNum}
          />

          <TextInput
            label={"何か気になることがあれば自由に書いてね"}
            multiline={true}
            rows={5}
            value={this.state.notes}
            type={"text"}
            onChange={this.inputNotes}
          />

          {/* 
        
        
          <RadioButton value={"test"} />
          <TextInput
            label={"お問い合わせ内容(必須)"}
            multiline={true}
            rows={5}
            value={this.state.notes}
            type={"text"}
            onChange={this.inputNotes}
          />
       */}
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={this.submitForm} color="primary">
            送信する
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
