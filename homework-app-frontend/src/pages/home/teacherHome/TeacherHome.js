import React, { useEffect } from "react";
import CreateHomeworkForm from "./CreateHomeworkForm";
import TeacherHeader from "../../../components/header/TeacherHeader";
import { useSelector, useDispatch } from "react-redux";
import { getHomeworksByCreatedTeacherAction } from "../../../redux/homework/homeworkActions";
import TeacherHomeworkCard from "../../../components/homeworkCard/TeacherHomeworkCard";

function Home() {
  const homeworks = useSelector((state) => state.homeworks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeworksByCreatedTeacherAction());
  }, []);

  return (
    <>
      <TeacherHeader />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="mx-2 my-2">Homeworks created by you</h1>
            <br />
            {homeworks.data &&
              homeworks.data.map((homework) => (
                <TeacherHomeworkCard
                  key={homework.id}
                  id={homework.id}
                  status={homework.status}
                  title={homework.title}
                  objectives={homework.objectives}
                  assignedTo={homework.assignedTo}
                  deadline={homework.deadline}
                  createdAt={homework.createdAt}
                />
              ))}
          </div>

          <div className="col-lg-4">
            <CreateHomeworkForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
