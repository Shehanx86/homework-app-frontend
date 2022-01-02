import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import { OptionsOneButton, OptionsTwoButtons } from "../../../components/alert/confirmOptions";
import CreateHomeworkForm from "./CreateHomeworkForm";
import { createNewHomeworkAction } from "../../../redux/homework/homeworkActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateHomework() {

  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const yesButton = () => {

  }

  const noButton = () => {
    console.log("no")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //confirmAlert(OptionsTwoButtons("Homework is being created", "Are you sure want to create this homework?", "Ok", yesButton, "No", noButton))

    const homeworkData = {
      pTitle: inputs.title,
      pAssignedTo: inputs.assignedTo,
      pDeadline: inputs.deadline,
      pObjectives: inputs.objectives,
    }
    dispatch(createNewHomeworkAction(homeworkData))
  };

  return (
    <>
    <br/>
    <div className="card">
      <div className="card-body shadow">
      <h5 className="card-title">Create new Homework</h5>
      <ToastContainer autoClose={2000} />
      <CreateHomeworkForm handleInput={handleInput} handleSubmit={handleSubmit} />
      </div>
      </div>      
    </>
  );
}

export default CreateHomework;
