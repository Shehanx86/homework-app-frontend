import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Collapse } from "react-collapse";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { AiFillDelete, AiFillEdit, AiOutlineFileDone } from "react-icons/ai";
import { OptionsTwoButtons } from "../alert/confirmOptions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteHomeworkByIdAction } from "../../redux/homework/homeworkActions";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import UpdateHomeworkForm from "../../pages/home/teacherHome/UpdateHomeworkForm";
import moment from "moment";
import { Row } from "react-bootstrap";

function TeacherHomeworkCard(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);
  const id = openPopover ? "simple-popover" : undefined;

  const changeColor = (status) => {
    let color = "yellow";
    if (status === "Finished") {
      color = "red";
    } else if (status === "Not Finished") {
      color = "yellow";
    }
    return color;
  };

  const yesButton = (homeworkId) => {
    dispatch(deleteHomeworkByIdAction(homeworkId));
  };

  const noButton = () => {
    toast("Delete cancelled!");
  };

  const deleteHomeworkConfirm = (homeworkId, title) => {
    confirmAlert(
      OptionsTwoButtons(
        homeworkId,
        "Delete " + title + "?",
        "Are you sure want to delete this?",
        "Yes",
        yesButton,
        "No",
        noButton
      )
    );
  };

  return (
    <div>
      <div className="card mb-2 shadow">
        <div
          className="card-body rounded py-2"
          style={{ backgroundColor: changeColor(props.status) }}
        >
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
                <button
                  className="btn btn-warning mx-1"
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick}
                >
                  <AiFillEdit />
                </button>
                <Popover
                  id={id}
                  open={openPopover}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Typography sx={{ p: 2 }} component={"div"}>
                    <UpdateHomeworkForm
                      id={props.id}
                      title={props.title}
                      objectives={props.objectives}
                      deadline={moment(props.deadline).format(
                        "YYYY-MM-DDTkk:mm"
                      )}
                      assignedTo={props.assignedTo}
                    />
                  </Typography>
                </Popover>

                <button
                  className="btn btn-danger mx-1"
                  onClick={() => deleteHomeworkConfirm(props.id, props.title)}
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          </div>

          <Collapse isOpened={open}>
            <div className="row">
              <div className="col-2">
                <p>Objetives</p>
                <p>Assigned to</p>
                <p>Deadline</p>
                <p>status</p>
                <p><i>Created At</i></p>
              </div>
              <div className="col-10">
                <p>- {props.objectives} </p>
                <p>- {props.assignedTo}</p>
                <p>- {moment(props.deadline).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                <p>- {props.status}</p>
                <p><i>- {moment(props.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</i></p>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default TeacherHomeworkCard;
