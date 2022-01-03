import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewHomeworkAction } from "../../redux/homework/homeworkActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateHomeworkForm() {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const homeworkData = {
      pTitle: inputs.title,
      pAssignedTo: inputs.assignedTo,
      pDeadline: inputs.deadline,
      pObjectives: inputs.objectives,
    };
    dispatch(createNewHomeworkAction(homeworkData));
  };

  return (
    <>
      <br />
      <div className="card">
        <div className="card-body shadow">
          <h5 className="card-title">Create new Homework</h5>
          <ToastContainer autoClose={2000} />
          <div>
            <form>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label mt-1">Title</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Title"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label mt-1">
                  Objectives
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    name="objectives"
                    className="form-control"
                    placeholder="Objectives"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label mt-1">Deadline</label>
                <div className="col-sm-9">
                  <input
                    type="datetime-local"
                    name="deadline"
                    className="form-control"
                    placeholder="Deadline"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label mt-1">
                  Assign To
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    name="assignedTo"
                    className="form-control"
                    placeholder="Student"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateHomeworkForm;
