import React from "react";

function CreateHomeworkForm(props) {

  return (
    <div>
      <form>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Title</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Title"
              onChange={props.handleInput}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Objectives</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="objectives"
              className="form-control"
              placeholder="Objectives"
              onChange={props.handleInput}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Deadline</label>
          <div className="col-sm-10">
            <input
              type="date"
              name="deadline"
              className="form-control"
              placeholder="Deadline"
              onChange={props.handleInput}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Assign To</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="assignedTo"
              className="form-control"
              placeholder="Student"
              onChange={props.handleInput}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={props.handleSubmit}
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateHomeworkForm;
