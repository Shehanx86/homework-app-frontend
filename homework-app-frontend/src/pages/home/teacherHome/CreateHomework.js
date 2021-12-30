import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { OptionsOneButton, OptionsTwoButtons } from "../../../components/alert/confirmOptions";
import CreateHomeworkForm from "./CreateHomeworkForm";

function CreateHomework() {

  const [inputs, setInputs] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const yesButton = () => {
    console.log("yes")
  }

  const noButton = () => {
    console.log("no")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    confirmAlert(OptionsTwoButtons("Task is being created", "Are you sure want to create this task?", "Ok", yesButton, "No", noButton))
    console.log(inputs);
  };

  return (
    <>

    <br/>
    <div className="card">
      <div className="card-body shadow">
      <h5 className="card-title">Create new Homework</h5>
      <CreateHomeworkForm handleInput={handleInput} handleSubmit={handleSubmit} />
      </div>
      </div>      
    </>
  );
}

export default CreateHomework;
