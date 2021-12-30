import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { AiFillDelete, AiFillEdit, AiOutlineFileDone } from 'react-icons/ai';
import { OptionsTwoButtons } from "../alert/confirmOptions";

function HomeworkCard(props) {
    // const [title, status, objectives, createdAt, assignedTo, homeworkDelete ] = props;
    const [open, setOpen] = useState(false);

    const changeColor = (status) => {
        let color = "yellow";
        if (status === "finished"){
            color = "red";
        } else 
        if(status === "not finished"){
            color = "yellow"
        }
        return color;
    }

    const yesButton = () => {
      console.log("yes")
    }

    const noButton = () => {
      console.log("no")
    }

    const taskDelete = () => {
      confirmAlert(OptionsTwoButtons("Delete Homework?", "Are you sure want to delete it?", "Yes", yesButton, "No", noButton ))
    }

    return (
        <div>
          <div className="card mb-2 shadow">
            <div className="card-body rounded py-2" style={{backgroundColor: changeColor(props.status)}}>
              <div className="row">
                <div className="col-9">
                  <h5 className="card-title" onClick={() => setOpen(!open)}>
                    {props.title}
                  </h5>
                </div>
                <div className="col-3">
                  <div className="d-flex justify-content-end">
                  {/* <button className="btn btn-success mx-1" onClick={markDone}>
                    <AiOutlineFileDone />
                  </button> */}
                  <a href="#" className="btn btn-success mx-1">
                    <AiFillEdit  />
                  </a>
                  <button className="btn btn-danger mx-1" onClick={props.homeworkDelete}>
                    <AiFillDelete />
                  </button>
                  </div>
                </div>
              </div>
    
              <Collapse isOpened={open}>
                <div>
                    {props.objectives} - {props.assignedTo} - {props.createdAt}
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      );
}

export default HomeworkCard;
