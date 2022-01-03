import React, { useState, useEffect } from 'react'

function UpdateHomeworkForm(props) {
  useEffect(() => {

  },[])

  const [homeworkData, setHomeworkData] = useState({
    title: props.title,
    objectives: props.objectives,
    deadline: props.deadline,
    assignedTo: props.assignedTo
  })

  const handleSubmit = () => {
    console.log(homeworkData)
  }

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setHomeworkData((prev) => ({ ...prev, [name]: value }));
  }

    return (
        <div >
          <form>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Title</label>
              <div className="col-sm-10">
                <input
                  value={homeworkData.title}
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Title"
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Objectives</label>
              <div className="col-sm-10">
                <input
                  value={homeworkData.objectives}
                  type="text"
                  name="objectives"
                  className="form-control"
                  placeholder="Objectives"
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Deadline</label>
              <div className="col-sm-10">
                <input
                  value={homeworkData.deadline}
                  type="date"
                  name="deadline"
                  className="form-control"
                  placeholder="Deadline"
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Assign To</label>
              <div className="col-sm-10">
                <input
                value={homeworkData.assignedTo}
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
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      );
}

export default UpdateHomeworkForm;
