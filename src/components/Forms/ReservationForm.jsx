import { CustomerForm, DateForm, PeoplePlaceForm, Thanks } from "./index";
import React, { useState, useCallback, useEffect } from "react";

const ReservationForm = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [adultsNum, setAdultsNum] = useState("");
  const [childrenNum, setChildrenNum] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [date, setDate] = useState(new Date());
  const [isNextForm, setIsNextForm] = useState(true);
  const [meetingPlace, setMeetingPlace] = useState("");
  const [notes, setNotes] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [step, setStep] = useState(1);
  const [time, setTime] = useState(new Date());

  // Functions triggered by inputting text value
  const inputAdultsNum = useCallback(
    (event) => {
      setAdultsNum(event.target.value);
    },
    [setAdultsNum]
  );

  const inputChildrenNum = useCallback(
    (event) => {
      setChildrenNum(event.target.value);
    },
    [setChildrenNum]
  );

  const inputCustomerName = useCallback(
    (event) => {
      setCustomerName(event.target.value);
    },
    [setCustomerName]
  );

  const inputDate = useCallback(
    (event) => {
      setDate(event);
    },
    [setDate]
  );

  const inputMeetingPlace = useCallback(
    (event) => {
      setMeetingPlace(event.target.value);
    },
    [setMeetingPlace]
  );

  const inputNotes = useCallback(
    (event) => {
      setNotes(event.target.value);
    },
    [setNotes]
  );

  const inputPhoneNum = useCallback(
    (event) => {
      setPhoneNum(event.target.value);
    },
    [setPhoneNum]
  );

  const inputTime = useCallback(
    (event) => {
      setTime(event);
    },
    [setTime]
  );

  const moveForm = useCallback(
    (isNextForm) => {
      setIsNextForm(isNextForm);
    },
    [setIsNextForm]
  );

  // Proceed to next step
  const nextStep = useCallback(
    (event) => {
      setStep(step + 1);
    },
    [step]
  );

  // Go back to prev step
  const prevStep = useCallback(
    (event) => {
      setStep(step - 1);
    },
    [step]
  );

  const resetStep = useCallback(
    (event) => {
      setStep(1);
    },
    [step]
  );

  const values = {
    adultsNum,
    childrenNum,
    customerName,
    date,
    meetingPlace,
    notes,
    phoneNum,
    time,
  };

  const getSteps = useCallback(() => {
    return ["日付", "人数/場所", "お客様情報"];
  }, []);

  const steps = getSteps();

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    moveForm(false);
  }, [setActiveStep]);

  const handleNext = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    moveForm(true);
  }, [setActiveStep]);

  const handleReset = useCallback(() => {
    setActiveStep(0);
  }, [setActiveStep]);

  switch (step) {
    case 1:
      return (
        <DateForm
          activeStep={activeStep}
          handleBack={handleBack}
          handleClose={props.handleClose}
          handleNext={handleNext}
          handleOpen={props.handleOpen}
          inputDate={inputDate}
          inputTime={inputTime}
          isNextForm={isNextForm}
          nextStep={nextStep}
          open={props.open}
          prevStep={prevStep}
          steps={steps}
          values={values}
        />
      );
    case 2:
      return (
        <PeoplePlaceForm
          activeStep={activeStep}
          handleBack={handleBack}
          handleClose={props.handleClose}
          handleNext={handleNext}
          handleOpen={props.handleOpen}
          inputAdultsNum={inputAdultsNum}
          inputChildrenNum={inputChildrenNum}
          inputMeetingPlace={inputMeetingPlace}
          isNextForm={isNextForm}
          nextStep={nextStep}
          open={props.open}
          prevStep={prevStep}
          steps={steps}
          values={values}
        />
      );
    case 3:
      return (
        <CustomerForm
          activeStep={activeStep}
          handleBack={handleBack}
          handleClose={props.handleClose}
          handleNext={handleNext}
          handleOpen={props.handleOpen}
          inputCustomerName={inputCustomerName}
          inputNotes={inputNotes}
          inputPhoneNum={inputPhoneNum}
          isNextForm={isNextForm}
          nextStep={nextStep}
          open={props.open}
          prevStep={prevStep}
          setAdultsNum={setAdultsNum}
          setChildrenNum={setChildrenNum}
          setCustomerName={setCustomerName}
          setDate={setDate}
          setMeetingPlace={setMeetingPlace}
          setNotes={setNotes}
          setPhoneNum={setPhoneNum}
          setTime={setTime}
          steps={steps}
          values={values}
        />
      );
    case 4:
      return (
        <Thanks
          handleClose={props.handleClose}
          handleReset={handleReset}
          open={props.open}
          resetStep={resetStep}
          setActiveStep={setActiveStep}
          setStep={setStep}
          values={values}
        />
      );
    default:
      console.log("This is a multi-step form built with React.");
      return <></>;
  }
};

export default ReservationForm;
